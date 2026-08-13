import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Apply to Join — Squad X" },
      {
        name: "description",
        content:
          "Think you're Squad material? Read our entry protocol and apply to join the collective.",
      },
      { property: "og:title", content: "Apply to Join — Squad X" },
      {
        property: "og:description",
        content:
          "Think you're Squad material? Read our entry protocol and apply to join the collective.",
      },
    ],
  }),
  component: JoinPage,
});

const requirements = [
  "Established portfolio of digital excellence",
  "Collaborative mindset & weekly availability",
  "Mastery of at least one creative engine",
  "Radical creative perspective",
];

function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-t border-brand-muted">
      <div className="px-6 py-20 md:px-8">
        <h1 className="font-display text-5xl font-bold  leading-none tracking-normal md:text-8xl">
          Think You're
          <br />
          <span className="text-gradient-brand">Squad Material?</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light text-muted-foreground">
          Membership is by peer review. No clout, no shortcuts — just craft, intent, and the
          willingness to build in the open with the rest of us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Requirements */}
        <div className="border-t border-r-0 border-brand-muted p-6 md:border-r md:p-12">
          <h2 className="font-display text-3xl font-bold ">Entry Protocol</h2>
          <ul className="mt-8 space-y-5">
            {requirements.map((r, i) => (
              <li key={r} className="flex items-start gap-4">
                <span className="font-display font-bold text-brand-accent">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border border-brand-accent/30 bg-brand-accent/5 p-6">
            <p className="text-[10px] font-bold tracking-widest text-brand-accent">
              [ What You Get ]
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Shared studio resources, project leads, collaborative render farms, and a unified
              brand presence. We rise together.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="border-t border-brand-muted bg-brand-surface/60 p-6 md:p-12">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h3 className="font-display text-4xl font-bold  text-brand-accent">
                Intel Received
              </h3>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Your application is in the queue. We review every submission by hand — if there's a
                fit, we'll reach out. Stand by.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border border-border px-6 py-3 text-xs font-bold tracking-widest transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-7"
            >
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-muted-foreground">
                  Handle / Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-brand-muted bg-transparent py-4 font-display text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-muted-foreground">
                  Discipline
                </label>
                <input
                  type="text"
                  required
                  placeholder="Motion / Code / Sound"
                  className="w-full border-b border-brand-muted bg-transparent py-4 font-display text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-muted-foreground">
                  Portfolio Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://"
                  className="w-full border-b border-brand-muted bg-transparent py-4 font-display text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-muted-foreground">
                  Mission Statement
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Why Squad X?"
                  className="w-full resize-none border border-brand-muted bg-transparent p-4 font-display text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent py-5 font-display text-lg font-bold tracking-normal text-brand-bg transition-all hover:invert"
              >
                Transmit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
