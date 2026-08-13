import { createFileRoute } from "@tanstack/react-router";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/K70CcmBCPHw6gSwFI9gkMZ?s=cl&p=i&mlu=0&amv=0";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Squad X" },
      {
        name: "description",
        content:
          "The first wave of Squad X on-set deployments, open jams, and creator meetups is coming soon. Join the movement for early access.",
      },
      { property: "og:title", content: "Upcoming Events — Squad X" },
      {
        property: "og:description",
        content:
          "The first wave of Squad X on-set deployments, open jams, and creator meetups is coming soon. Join the movement for early access.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <section className="border-t border-brand-muted px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-bold md:text-6xl">
          <span className="text-gradient-brand">Upcoming Events</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
          We are preparing the first wave of on-set deployments, open jams, and
          creator meetups. Join the movement to get early access announcements.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl border border-brand-accent/30 bg-brand-accent/5 p-10 text-center md:p-16">
        <p className="text-[10px] font-bold tracking-widest text-brand-accent">
          [ Status ]
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
          Initial Drop
          <br />
          <span className="text-gradient-brand">Coming Soon</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          On-set commercial shoots, open jam sessions, and collective meetups
          are being locked in. Early members get first dibs.
        </p>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-brand-accent px-8 py-4 font-display text-sm font-bold tracking-normal text-brand-bg transition-all hover:invert"
        >
          Join WhatsApp for Early Access
        </a>
      </div>
    </section>
  );
}
