import { createFileRoute, Link } from "@tanstack/react-router";
import { members } from "@/lib/members";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "The Roster — Squad X" },
      {
        name: "description",
        content:
          "The Squad X roster — a collective of digital renegades across code, motion, and sound.",
      },
      { property: "og:title", content: "The Roster — Squad X" },
      {
        property: "og:description",
        content:
          "The Squad X roster — a collective of digital renegades across code, motion, and sound.",
      },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  return (
    <section className="border-t border-brand-muted px-6 py-20 md:px-8">
      <div className="mb-16 flex items-end justify-between">
        <h1 className="font-display text-4xl font-bold  md:text-6xl">The Roster</h1>
        <span className="font-mono text-sm text-muted-foreground">
          [ {members.length} Active Members ]
        </span>
      </div>

      <div className="grid grid-cols-1 gap-px border border-brand-muted bg-brand-muted md:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <div
            key={m.name}
            className="group flex flex-col bg-brand-bg p-8 transition-colors hover:bg-brand-surface"
          >
            <img
              src={m.image}
              alt={m.name}
              width={800}
              height={800}
              loading="lazy"
              className="mb-6 aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <h3 className="font-display text-2xl font-bold  group-hover:text-brand-accent">
              {m.name}
            </h3>
            <p className="mt-1 text-xs font-bold tracking-widest text-brand-accent">
              {m.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            <p className="mt-5 font-mono text-xs text-muted-foreground">{m.handle}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border border-brand-muted p-10 text-center">
        <h2 className="font-display text-3xl font-bold ">
          There's room for one more.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          The roster grows when the right people show up. Could be you.
        </p>
        <Link
          to="/join"
          className="mt-8 inline-flex bg-brand-accent px-8 py-4 text-xs font-bold tracking-normal text-brand-bg transition-colors hover:bg-white"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
