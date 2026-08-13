import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ClientOnly,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const GradientWaves = lazy(() => import("@/components/GradientWaves"));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-accent px-4 py-2 text-sm font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-bold  tracking-tight text-foreground">
          Transmission failed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand-accent px-4 py-2 text-sm font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Squad X — Building India's Next Creative Force" },
      {
        name: "description",
        content:
          "Squad X by Wacko Pix x µLearn: an open media collective where creators, freelancers and beginners prove their skills on real production sets. Free access.",
      },
      { name: "author", content: "Squad X Collective" },
      { property: "og:title", content: "Squad X — Building India's Next Creative Force" },
      {
        property: "og:description",
        content:
          "Squad X by Wacko Pix x µLearn: an open media collective where creators, freelancers and beginners prove their skills on real production sets. Free access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Squad X — Building India's Next Creative Force" },
      { name: "twitter:description", content: "Squad X by Wacko Pix x µLearn: an open media collective where creators, freelancers and beginners prove their skills on real production sets. Free access." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/52ffdce6-0938-4bbe-9e4e-9b57b479bfc2" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/52ffdce6-0938-4bbe-9e4e-9b57b479bfc2" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function SiteHeader() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-8 border-b border-brand-muted">
      <Link
        to="/"
        aria-label="Squad X home"
        className="flex w-fit flex-col items-center justify-center text-center leading-none"
      >
        <span className="block text-center text-[0.6rem] font-bold tracking-widest text-foreground [margin-right:-0.15em]">
          WACKO <span className="text-brand-accent">PIX</span>
        </span>
        <span className="mt-1 text-xl font-display font-extrabold tracking-tight text-foreground">
          SQUAD <span className="text-brand-accent">X</span>
        </span>
      </Link>


      <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest">
        <Link
          to="/announcements"
          activeProps={{ className: "text-brand-accent" }}
          className="text-foreground/80 transition-colors hover:text-brand-accent"
        >
          Announcements
        </Link>
        <Link
          to="/events"
          activeProps={{ className: "text-brand-accent" }}
          className="text-foreground/80 transition-colors hover:text-brand-accent"
        >
          Events
        </Link>
        <Link
          to="/manifesto"
          activeProps={{ className: "text-brand-accent" }}
          className="text-foreground/80 transition-colors hover:text-brand-accent"
        >
          Manifesto
        </Link>
      </div>
      <a
        href="/#register"
        className="bg-brand-accent px-5 py-2 text-xs font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
      >
        Join Free
      </a>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-brand-muted px-6 py-14 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex w-fit flex-col items-center justify-center text-center leading-none">
          <span className="block text-center text-xs font-bold tracking-widest text-foreground [margin-right:-0.15em]">
            WACKO <span className="text-brand-accent">PIX</span>
          </span>
          <span className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground">
            SQUAD <span className="text-brand-accent">X</span>
          </span>
        </div>

        <p className="mt-4 text-sm tracking-widest text-muted-foreground">
          Driven by Wacko Pix in collaboration with µLearn Ecosystem
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold tracking-widest">
          <Link
            to="/manifesto"
            className="text-foreground/80 transition-colors hover:text-brand-accent"
          >
            Manifesto
          </Link>
          <span className="text-brand-muted">•</span>
          <Link
            to="/announcements"
            className="text-foreground/80 transition-colors hover:text-brand-accent"
          >
            Announcements
          </Link>
          <span className="text-brand-muted">•</span>
          <Link
            to="/events"
            className="text-foreground/80 transition-colors hover:text-brand-accent"
          >
            Events
          </Link>
          <span className="text-brand-muted">•</span>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 transition-colors hover:text-brand-accent"
          >
            Connect
          </a>
        </nav>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wackopix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-muted px-6 py-3 font-mono text-xs tracking-widest text-foreground/80 transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            wackopix.com
          </a>
          <a
            href="https://mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-muted px-6 py-3 font-mono text-xs tracking-widest text-foreground/80 transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            mulearn.org
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-xl space-y-3">
          <p className="text-sm text-muted-foreground">
            An open media collective driven by Wacko Pix in collaboration with µLearn.
          </p>
          <p className="text-sm text-muted-foreground">
            Backed by government networks and 500+ corporate partners.
          </p>
        </div>

        <p className="mt-10 font-mono text-xs text-muted-foreground">
          © 2026 Squad X. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/K70CcmBCPHw6gSwFI9gkMZ?s=cl&p=i&mlu=0&amv=0";

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join the Squad X WhatsApp group"
      className="accent-glow fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-brand-accent px-5 py-3 text-xs font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      Join WhatsApp
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-transparent opacity-80">
          <ClientOnly fallback={null}>
            <Suspense fallback={null}>
            <GradientWaves
              horizonColor="#000000"
              waveColor="#0D1A08"
              crestColor="#39A018"
              speed={0.3}
              amplitude={2.0}
              detail="medium"
              opacity={0.5}
              grain
              mouseInteraction
            />
            </Suspense>
          </ClientOnly>
        </div>
        <div className="relative z-10">
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <WhatsAppButton />
        </div>
      </div>
    </QueryClientProvider>
  );
}
