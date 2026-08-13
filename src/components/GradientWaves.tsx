import { useEffect, useRef } from "react";
import "./GradientWaves.css";

export type GradientWavesProps = {
  horizonColor?: string;
  waveColor?: string;
  crestColor?: string;
  speed?: number;
  amplitude?: number;
  detail?: "low" | "medium" | "high";
  opacity?: number;
  grain?: boolean;
  mouseInteraction?: boolean;
  className?: string;
};

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const int = parseInt(full, 16);
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

const vertex = /* glsl */ `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = /* glsl */ `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uHorizon;
uniform vec3 uWave;
uniform vec3 uCrest;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uOpacity;
uniform float uGrain;
uniform float uSteps;

out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// Height of the wave field at a world XZ position.
float waveHeight(vec2 p, float t) {
  float h = 0.0;
  float amp = 0.55;
  float freq = 0.55;
  for (int i = 0; i < 4; i++) {
    h += amp * sin(p.x * freq + t * (0.8 + float(i) * 0.17)) *
         cos(p.y * freq * 0.85 - t * (0.6 + float(i) * 0.11));
    h += amp * 0.4 * (noise(p * freq * 1.3 + t * 0.15) - 0.5);
    amp *= 0.52;
    freq *= 1.95;
  }
  return h * uAmplitude * 0.35;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = (frag - 0.5 * uResolution) / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;

  vec2 mouseOffset = (uMouse - 0.5) * 0.6;

  // Simple raymarch across a heightfield seen from a low camera.
  vec3 ro = vec3(0.0 + mouseOffset.x, 1.15, -2.5);
  vec3 rd = normalize(vec3(uv.x, uv.y - 0.12 + mouseOffset.y * 0.12, 1.0));

  float dist = 0.0;
  float hit = 0.0;
  float height = 0.0;
  float steps = uSteps;

  for (int i = 0; i < 96; i++) {
    if (float(i) >= steps) break;
    vec3 pos = ro + rd * dist;
    float h = waveHeight(pos.xz, t);
    float diff = pos.y - h;
    if (diff < 0.02) {
      hit = 1.0;
      height = h;
      break;
    }
    dist += max(diff * 0.45, 0.05);
    if (dist > 26.0) break;
  }

  float fog = 1.0 - exp(-dist * 0.05);
  float crest = smoothstep(-0.25, 0.45, height);
  crest *= hit;

  vec3 color = uHorizon;
  vec3 surface = mix(uWave, uCrest, clamp(crest, 0.0, 1.0));
  color = mix(surface, uHorizon, clamp(fog, 0.0, 1.0));
  color = mix(uHorizon, color, hit);

  // Soft vignette so edges fade into the page background.
  float vign = smoothstep(1.5, 0.1, length(uv * vec2(0.7, 1.05)));
  color *= vign;

  if (uGrain > 0.5) {
    float g = hash(frag + fract(uTime) * 137.0) - 0.5;
    color += g * 0.035;
  }

  float alpha = uOpacity * clamp(vign + 0.15, 0.0, 1.0);
  fragColor = vec4(max(color, 0.0), alpha);
}
`;

export default function GradientWaves({
  horizonColor = "#000000",
  waveColor = "#0D1A08",
  crestColor = "#39A018",
  speed = 0.3,
  amplitude = 2.0,
  detail = "medium",
  opacity = 0.4,
  grain = true,
  mouseInteraction = true,
  className,
}: GradientWavesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const { Renderer, Program, Mesh, Triangle, Vec2, Color } = await import("ogl");
      if (disposed) return;

      let renderer: InstanceType<typeof Renderer>;
      try {
        renderer = new Renderer({
          alpha: true,
          antialias: false,
          dpr: Math.min(window.devicePixelRatio || 1, 1.5),
          webgl: 2,
        });
      } catch {
        return;
      }

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(gl.canvas);

      const steps = detail === "low" ? 40 : detail === "high" ? 96 : 64;

      const program = new Program(gl, {
        vertex,
        fragment,
        transparent: true,
        uniforms: {
          uResolution: { value: new Vec2(1, 1) },
          uTime: { value: 0 },
          uMouse: { value: new Vec2(0.5, 0.5) },
          uHorizon: { value: new Color(...hexToRgb(horizonColor)) },
          uWave: { value: new Color(...hexToRgb(waveColor)) },
          uCrest: { value: new Color(...hexToRgb(crestColor)) },
          uSpeed: { value: reduceMotion ? 0 : speed },
          uAmplitude: { value: amplitude },
          uOpacity: { value: opacity },
          uGrain: { value: grain ? 1 : 0 },
          uSteps: { value: steps },
        },
      });

      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = container;
        renderer.setSize(Math.max(w, 1), Math.max(h, 1));
        program.uniforms['uResolution'].value.set(gl.canvas.width, gl.canvas.height);
      };
      resize();

      const ro = new ResizeObserver(resize);
      ro.observe(container);

      const targetMouse = { x: 0.5, y: 0.5 };
      const onPointerMove = (e: PointerEvent) => {
        targetMouse.x = e.clientX / window.innerWidth;
        targetMouse.y = 1 - e.clientY / window.innerHeight;
      };
      if (mouseInteraction) window.addEventListener("pointermove", onPointerMove);

      let raf = 0;
      const start = performance.now();
      const loop = () => {
        raf = requestAnimationFrame(loop);
        const m = program.uniforms['uMouse'].value;
        m.set(m.x + (targetMouse.x - m.x) * 0.05, m.y + (targetMouse.y - m.y) * 0.05);
        program.uniforms['uTime'].value = (performance.now() - start) / 1000;
        renderer.render({ scene: mesh });
      };
      raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        if (mouseInteraction) window.removeEventListener("pointermove", onPointerMove);
        gl.canvas.parentNode?.removeChild(gl.canvas);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    detail,
    opacity,
    grain,
    mouseInteraction,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`gradient-waves${className ? ` ${className}` : ""}`}
    />
  );
}
