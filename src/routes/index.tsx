import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroSet from "@/assets/hero-set.jpg";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/K70CcmBCPHw6gSwFI9gkMZ?s=cl&p=i&mlu=0&amv=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Squad X — Building India's Next Creative Force" },
      {
        name: "description",
        content:
          "Squad X by Wacko Pix x µLearn: an open media collective where creators, freelancers and beginners prove their skills on real production sets. Free access.",
      },
      { property: "og:title", content: "Squad X — Building India's Next Creative Force" },
      {
        property: "og:description",
        content:
          "Squad X by Wacko Pix x µLearn: an open media collective where creators, freelancers and beginners prove their skills on real production sets. Free access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const mirrors = [
  {
    name: "The Explorer",
    quote: "Am I creative? I'm stuck at the starting line.",
    fix: "Zero-pressure experiments & peer circles.",
  },
  {
    name: "The Monetizer",
    quote: "I have skill, but I'm broke or working for free.",
    fix: "Pricing tactics & active client pipelines.",
  },
  {
    name: "The Scaler",
    quote: "Hit a creative & operational ceiling.",
    fix: "Production pipelines & team building.",
  },
  {
    name: "Opportunity Seeker",
    quote: "I need real projects and live shoots.",
    fix: "Wacko Pix set deployments & gig access.",
  },
  {
    name: "The Networker",
    quote: "Creating alone and need my tribe.",
    fix: "High-energy meetups & collective builds.",
  },
];

const perks = [
  {
    title: "Live On-Set Deployment",
    detail: "Step directly onto active Wacko Pix commercial shoots.",
  },
  {
    title: "Technopark & Corporate Pipelines",
    detail: "Access media roles across 500+ µLearn corporate partner networks.",
  },
  {
    title: "Freelance Gigs & Teams",
    detail: "Find your crew, stop underpricing your work, secure real client projects.",
  },
  {
    title: "Zero Academic Barriers",
    detail: "No expensive gear or prior experience required. Just your mindset.",
  },
];

const departments = [
  {
    name: "Pre-Production & Writing",
    detail: "Direction, Scriptwriting, Storyboarding, Content Research.",
  },
  {
    name: "Camera & On-Set Crew",
    detail: "Cinematography, Photography, Lighting, Drone, On-Set Sound.",
  },
  {
    name: "Post-Production & Editing",
    detail: "Video Editing, Color Grading (DI), Sound Design, Music Composition.",
  },
  {
    name: "VFX, AI & Animation",
    detail: "AI Media Tools, 2D/3D Animation, Motion Design, Graphic Design.",
  },
  {
    name: "Social Growth & Tech",
    detail: "Algorithm Growth, Meme Marketing, Content Strategy, Media Tech.",
  },
  {
    name: "Management & Sales",
    detail: "Production Management, Operations, Client Pitching, Sales.",
  },
];

const roles = [
  "Editor",
  "Shooter / Cinematographer",
  "Writer",
  "Director",
  "Designer / Animator",
  "Sound / Music",
  "Social & Marketing",
  "Production Management",
  "Beginner — Just Exploring",
];

function Landing() {
  return (
    <>
      <Hero />
      <Execution />
      <Mirror />
      <Perks />
      <Ecosystem />
      <RegistrationForm />
    </>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <img
        src={heroSet}
        alt="Film crew operating a camera rig on a night production set"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      <div className="relative px-6 py-28 md:px-8 md:py-40">
        <p className="font-mono text-xs tracking-[0.3em] text-brand-accent">
          Wacko Pix <span className="text-foreground/60">x</span> µLearn
        </p>
        <h1 className="mt-8 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[6.5rem]">
          Building India&rsquo;s Next
          <br />
          <span className="text-gradient-brand">Creative Force</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          Not an academy. An open floor for the blocked, the broke, and the creators searching for
          direction. Come as you are—we build the future on real sets.
        </p>
        <a
          href="#register"
          className="accent-glow mt-12 inline-flex bg-brand-accent px-10 py-5 text-sm font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
        >
          Join the Movement — Free Access
        </a>
      </div>
    </header>
  );
}

function Execution() {
  return (
    <section className="border-t border-brand-muted px-6 py-24 md:px-8">
      <h2 className="max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-normal md:text-6xl">
        <span className="text-gradient-brand">The Rule of Execution</span>
      </h2>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        There are no heavy textbooks here. No boring theory lectures or useless certificates.
        Squad X is built on a single rule:{" "}
        <span className="font-bold text-foreground">Execution.</span> You build your future by
        working on real tasks, gaining on-set commercial experience, and producing unmistakable
        proof of work.
      </p>
    </section>
  );
}

function Mirror() {
  return (
    <section className="border-t border-brand-muted bg-brand-surface/40 px-6 py-24 md:px-8">
      <h2 className="max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-normal md:text-6xl">
        <span className="text-gradient-brand">Which Problem Is Yours?</span>
      </h2>

      <div className="mt-12 grid gap-px bg-brand-muted sm:grid-cols-2 lg:grid-cols-5">
        {mirrors.map((m) => (
          <div key={m.name} className="flex flex-col bg-brand-surface/40 p-6">
            <h3 className="font-display text-xl font-bold leading-tight">{m.name}</h3>
            <p className="mt-4 border-l-2 border-brand-accent pl-4 text-sm italic leading-relaxed text-foreground/90">
              “{m.quote}”
            </p>
            <p className="mt-5 text-sm leading-relaxed text-brand-accent">{m.fix}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="border-t border-brand-muted px-6 py-24 md:px-8">
      <h2 className="max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-normal md:text-6xl">
        <span className="text-gradient-brand">What You Get Inside</span>
      </h2>

      <div className="mt-12 grid gap-px bg-brand-muted sm:grid-cols-2">
        {perks.map((p, i) => (
          <div key={p.title} className="bg-brand-bg p-8">
            <span className="font-mono text-xs text-brand-accent">0{i + 1}</span>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-t border-brand-muted bg-brand-surface/40 px-6 py-24 md:px-8">
      <h2 className="max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-normal md:text-6xl">
        <span className="text-gradient-brand">Full Media Ecosystem Coverage</span>
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        We mentor and operate across every single department in media. Everyone finds their place.
      </p>

      <div className="mt-12 grid gap-px bg-brand-muted sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((d) => (
          <div key={d.name} className="bg-brand-surface/40 p-6">
            <h3 className="font-display text-lg font-bold leading-tight">{d.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      setError("Please enter your full name.");
      return;
    }
    if (!role) {
      setError("Pick your primary role or interest.");
      return;
    }
    if (!/^[+\d][\d\s-]{7,17}$/.test(cleanPhone)) {
      setError("Enter a valid WhatsApp number.");
      return;
    }

    setError("");
    setSubmitted(true);
    window.location.href = WHATSAPP_GROUP_URL;
  }

  return (
    <section id="register" className="scroll-mt-16 bg-brand-accent px-6 py-24 text-brand-bg md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-normal md:text-7xl">
            Join The
            <br />
            Movement
          </h2>
          <p className="mt-6 text-lg font-medium">Takes less than 30 seconds. 100% Free Access.</p>
        </div>

        {submitted ? (
          <div className="border-2 border-brand-bg p-8">
            <p className="font-display text-2xl font-bold">Spot claimed.</p>
            <p className="mt-3 text-sm font-medium">
              Redirecting you to the Official Squad X WhatsApp Announcement Group…
            </p>
            <a
              href={WHATSAPP_GROUP_URL}
              className="mt-6 inline-flex bg-brand-bg px-6 py-3 text-xs font-bold tracking-widest text-brand-accent"
            >
              Open WhatsApp Group ➔
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-xs font-bold tracking-widest">
                Full Name
              </label>
              <input
                id="fullname"
                value={name}
                maxLength={100}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full border-2 border-brand-bg bg-transparent px-4 py-3 text-brand-bg placeholder:text-brand-bg/50 focus:outline-none focus:ring-2 focus:ring-brand-bg"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-xs font-bold tracking-widest">
                Primary Role / Interest
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 w-full border-2 border-brand-bg bg-transparent px-4 py-3 text-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-bg"
              >
                <option value="">Select one…</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold tracking-widest">
                WhatsApp Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                maxLength={18}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 00000 00000"
                className="mt-2 w-full border-2 border-brand-bg bg-transparent px-4 py-3 text-brand-bg placeholder:text-brand-bg/50 focus:outline-none focus:ring-2 focus:ring-brand-bg"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm font-bold tracking-wide">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-brand-bg px-8 py-5 text-sm font-bold tracking-normal text-brand-accent transition-opacity hover:opacity-85"
            >
              Claim Your Spot & Join WhatsApp Group ➔
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
