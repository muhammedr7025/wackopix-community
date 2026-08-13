import { createFileRoute, Link } from "@tanstack/react-router";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/K70CcmBCPHw6gSwFI9gkMZ?s=cl&p=i&mlu=0&amv=0";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "Manifesto — Squad X" },
      {
        name: "description",
        content:
          "The Squad X manifesto: no age limit, no experience needed, no expensive gear. Only mindset. An open floor, not an academy.",
      },
      { property: "og:title", content: "Manifesto — Squad X" },
      {
        property: "og:description",
        content:
          "The Squad X manifesto: no age limit, no experience needed, no expensive gear. Only mindset. An open floor, not an academy.",
      },
    ],
  }),
  component: ManifestoPage,
});

const pillars = [
  {
    no: "01",
    title: "Not an academy. An open floor.",
    body: "There are no heavy textbooks here, no boring theory lectures, and no useless certificates. We learn by executing on real sets.",
  },
  {
    no: "02",
    title: "Zero-barrier execution",
    body: "You don't need a 4K cinema camera to prove your skill. Shoot and edit on whatever phone or gear you currently have—execution beats equipment every time.",
  },
  {
    no: "03",
    title: "Proof-of-work over resumes",
    body: "Nobody in the industry buys degrees; they buy commercial proof-of-work. You build your future by taking on active client briefs, handling live shoots, and producing tangible results.",
  },
  {
    no: "04",
    title: "No one scales alone",
    body: "Creating in isolation leads to creative blocks and underpricing. We stand together as a collective, pooling crews, sharing client pipelines, and building media IPs across the region.",
  },
];

function ManifestoPage() {
  return (
    <section className="border-t border-brand-muted px-6 py-20 md:px-8">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-gradient-brand">The Squad X Manifesto</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
          “No age limit. No experience needed. No expensive gear required. Only
          mindset. Let&rsquo;s stand together and build.”
        </p>
      </div>

      {/* Pillars */}
      <div className="mt-20 grid gap-px border border-brand-muted bg-brand-muted md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.no}
            className="bg-brand-bg p-8 transition-colors hover:bg-brand-surface/60 md:p-12"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-brand-accent">
                {p.no}
              </span>
              <span className="h-px flex-1 bg-brand-accent/40" />
            </div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              {p.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Call to stand */}
      <div className="mt-20 border border-brand-accent/30 bg-brand-accent/5 p-10 text-center md:p-16">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Stuck at the starting line?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Come as you are. We build the foundation together on active production
          sets.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-accent px-8 py-4 font-display text-sm font-bold tracking-normal text-brand-bg transition-all hover:invert"
          >
            Claim your spot now ➔
          </a>
          <Link
            to="/join"
            className="inline-flex items-center justify-center border border-brand-accent px-8 py-4 font-display text-sm font-bold tracking-normal text-foreground transition-all hover:bg-brand-accent hover:text-brand-bg"
          >
            Join the movement
          </Link>
        </div>
      </div>
    </section>
  );
}
