import vesper from "@/assets/members/vesper.png";
import marcus from "@/assets/members/marcus.png";
import lyra from "@/assets/members/lyra.png";
import koda from "@/assets/members/koda.png";
import echo from "@/assets/members/echo.png";
import nul from "@/assets/members/null.png";

export type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  handle: string;
};

export const members: Member[] = [
  {
    name: "Vesper K.",
    role: "Technical Director",
    bio: "Architect of generative systems and real-time visual engines. Formerly at X-Labs.",
    image: vesper,
    handle: "@vesper.k",
  },
  {
    name: "Marcus Void",
    role: "Sonic Architect",
    bio: "Pushing the boundaries of spatial audio and modular synthesis for the metaverse.",
    image: marcus,
    handle: "@marcusvoid",
  },
  {
    name: "Lyra 01",
    role: "3D Generalist",
    bio: "Creating surreal digital landscapes and hyper-real character designs for digital fashion.",
    image: lyra,
    handle: "@lyra.01",
  },
  {
    name: "K0DA",
    role: "Creative Developer",
    bio: "Translating organic entropy into high-fidelity geometry for the browser.",
    image: koda,
    handle: "@k0da",
  },
  {
    name: "ECHO",
    role: "Motion Designer",
    bio: "Kinetic typography and reactive visual feedback loops that refuse to sit still.",
    image: echo,
    handle: "@echo.dev",
  },
  {
    name: "NULL",
    role: "Shader Artist",
    bio: "Weaponizing GLSL for atmospheric browser experiences and impossible light.",
    image: nul,
    handle: "@null_ptr",
  },
];

export type EventItem = {
  date: string;
  title: string;
  location: string;
  status: "open" | "soldout" | "live";
};

export const events: EventItem[] = [
  {
    date: "AUG 24",
    title: "Live Shader Jam #04",
    location: "Twitch / 8PM EST",
    status: "live",
  },
  {
    date: "SEP 02",
    title: "Synthesizer Workshop",
    location: "Berlin Studio / IRL",
    status: "soldout",
  },
  {
    date: "SEP 16",
    title: "Generative Canvas Jam",
    location: "Discord / All Day",
    status: "open",
  },
  {
    date: "OCT 03",
    title: "Kernel Error Session",
    location: "London Studio / IRL",
    status: "open",
  },
  {
    date: "OCT 21",
    title: "Winter Collection Drop",
    location: "Online / 6PM EST",
    status: "open",
  },
  {
    date: "NOV 09",
    title: "Spatial Audio Lab",
    location: "Tokyo Studio / IRL",
    status: "soldout",
  },
];
