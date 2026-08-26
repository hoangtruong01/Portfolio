import type { ProjectContent } from "../../types";
import horsetrackHero from "../../../assets/images/projects/horsetrack/hero.png";
import horsetrackTrophy from "../../../assets/images/projects/horsetrack/trophy.png";
import horsetrackGlobe from "../../../assets/images/projects/horsetrack/globe.png";
import horseTrackLogo from "../../../assets/images/logos/horsetrack-logo.png";

export default {
  title: "HorseTrack",
  theme: "dark",
  logo: horseTrackLogo,
  tags: ["next", "react", "websockets", "node", "tailwind", "typescript"],
  description:
    "A high-fidelity horse racing tournament management and real-time analytics dashboard with an F1 cockpit aesthetic, role-based workflows, and live WebSockets updates.",
  live: "https://www.horsetrack.io.vn",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: horsetrackHero,
        alt: "HorseTrack Dashboard",
        caption: "HorseTrack Live Race Hub - High-contrast Dark Motorsport Dashboard.",
      },
    },
    {
      type: "text",
      props: {
        title: "The Overview",
        text: "HorseTrack is a premium, real-time sports analytical dashboard designed specifically for managing and tracking horse racing tournaments. Moving away from standard SaaS styles, HorseTrack implements a dark motorsport visual language reminiscent of Formula 1 cockpits. The platform handles intricate role structures, live race progress broadcasts, and comprehensive referee reporting.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: horsetrackTrophy,
        alt: "HorseTrack Roles and Features",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Key Capabilities",
            items: [
              "<strong>Admin Dashboard:</strong> Direct tournament creation, race scheduling, and referee delegation with complete oversight.",
              "<strong>Interactive Owner Hub:</strong> Register stables/horses and assign jockeys to specific competitive races.",
              "<strong>Live Spectator View:</strong> Watch live races with immediate position updates via WebSockets and run mock predictions.",
              "<strong>Tablet-First Referee Controls:</strong> Record race completion times, infractions, and submit real-time violation logs directly from the track.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: horsetrackGlobe,
        alt: "HorseTrack Global Tournament Network",
        caption: "Global Tournament Network - Connecting top racing events worldwide.",
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Architecture",
        text: "The application is built on a highly decoupled architecture. The frontend uses Next.js 15 (App Router) with React 19, featuring custom glassmorphic components and optimized Tailwind layouts. The backend is powered by NestJS (TypeScript) and MongoDB with Socket.io enabling real-time notification streams. A React Native and Expo app synchronizes user experiences across mobile platforms.",
      },
    },
  ],
} as const satisfies ProjectContent;
