import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — Squad X" },
      {
        name: "description",
        content:
          "Official Squad X announcements, crew calls, and paid freelance opportunities from the Wacko Pix x µLearn collective.",
      },
      { property: "og:title", content: "Announcements — Squad X" },
      {
        property: "og:description",
        content:
          "Official Squad X announcements, crew calls, and paid freelance opportunities from the Wacko Pix x µLearn collective.",
      },
    ],
  }),
  component: AnnouncementsPage,
});

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/K70CcmBCPHw6gSwFI9gkMZ?s=cl&p=i&mlu=0&amv=0";

const announcements = [
  {
    badge: "Call For Crew",
    title: "Commercial Shoot — On-Set Crew Call",
    body: "Wacko Pix is opening slots for camera, lighting, and on-set sound for an upcoming commercial production. Beginners welcome — you learn directly on the floor.",
    button: "Apply for Crew",
    href: WHATSAPP_GROUP_URL,
  },
  {
    badge: "Freelance Gigs",
    title: "Looking for Reel Editors — Paid Freelance Work",
    body: "Active client briefs and short-form video projects are waiting. If you can edit high-energy reels and short videos, take on real client work through Squad X.",
    button: "Submit Your Portfolio / Apply",
    href: WHATSAPP_GROUP_URL,
  },
  {
    badge: "Campus Initiative",
    title: "Start a Media Team in Your Campus Chapter",
    body: "Does your college chapter lack a dedicated media team? Ready to build one but need mentorship, direction, and production support? Squad X provides full guidance to set up and scale your campus media crew.",
    button: "Start Your Campus Media Team",
    href: WHATSAPP_GROUP_URL,
  },
];

function AnnouncementsPage() {
  return (
    <section className="border-t border-brand-muted px-6 py-20 md:px-8">
      <div className="mb-16">
        <h1 className="font-display text-4xl font-bold md:text-6xl">
          Announce
          <br />
          <span className="text-gradient-brand">Feed</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light text-muted-foreground">
          Official transmissions from the collective — crew calls, paid gigs,
          and open invitations. Fresh intel lands here first.
        </p>
      </div>

      <div className="space-y-4">
        {announcements.map((a) => (
          <article
            key={a.title}
            className="group flex flex-col gap-6 border border-brand-muted p-6 transition-all hover:border-brand-accent md:flex-row md:items-start md:gap-10 md:p-8"
          >
            <div className="flex shrink-0 items-center gap-6 md:w-56 md:flex-col md:items-start md:gap-4">
              <span className="border border-brand-accent/40 px-2 py-0.5 text-[10px] font-bold tracking-widest text-brand-accent">
                {a.badge}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-display text-xl font-bold md:text-2xl">
                {a.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {a.body}
              </p>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-brand-accent px-6 py-3 font-display text-sm font-bold tracking-normal text-brand-bg transition-all hover:invert"
              >
                {a.button} →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-brand-muted pt-12">
        <p className="font-mono text-sm text-muted-foreground">
          Want your announcement on the feed?
        </p>
        <Link
          to="/join"
          className="mt-4 inline-flex items-center gap-2 font-display text-xl font-bold transition-colors hover:text-brand-accent"
        >
          Get in the collective →
        </Link>
      </div>
    </section>
  );
}
