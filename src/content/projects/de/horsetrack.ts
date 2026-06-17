import type { ProjectContent } from "../../types";
import horsetrackHero from "../../../assets/images/projects/horsetrack/hero.png";
import horsetrackTrophy from "../../../assets/images/projects/horsetrack/trophy.png";

export default {
  title: "HorseTrack",
  theme: "dark",
  tags: ["next", "react", "websockets", "node", "tailwind", "typescript"],
  description:
    "Ein hochauflösendes Dashboard zur Verwaltung von Pferderennen und Echtzeit-Analysen mit F1-Cockpit-Ästhetik, rollenbasierten Workflows und Live-WebSockets-Updates.",
  live: "https://www.horsetrack.io.vn",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: horsetrackHero,
        alt: "HorseTrack Dashboard",
        caption: "HorseTrack Live Race Hub - Kontrastreiches dunkles Motorsport-Dashboard.",
      },
    },
    {
      type: "text",
      props: {
        title: "Der Überblick",
        text: "HorseTrack ist ein erstklassiges Echtzeit-Sportanalyse-Dashboard, das speziell für die Verwaltung und Verfolgung von Pferderennturnieren entwickelt wurde. Abweichend von standardmäßigen SaaS-Stilen implementiert HorseTrack eine dunkle Motorsport-Visualisierung, die an Formel-1-Cockpits erinnert. Die Plattform verwaltet komplexe Rollenstrukturen, Live-Übertragungen des Rennverlaufs und umfassende Berichte der Schiedsrichter.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: horsetrackTrophy,
        alt: "HorseTrack Rollen und Funktionen",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Kernfunktionen",
            items: [
              "<strong>Admin-Dashboard:</strong> Direkte Erstellung von Turnieren, Rennplanung und Schiedsrichterdelegation mit vollständiger Übersicht.",
              "<strong>Interaktiver Owner Hub:</strong> Registrieren Sie Ställe/Pferde und weisen Sie Jockeys spezifischen Wettbewerbsrennen zu.",
              "<strong>Live-Zuschaueransicht:</strong> Verfolgen Sie Live-Rennen mit sofortigen Positionsaktualisierungen über WebSockets und nutzen Sie Schein-Vorhersagen.",
              "<strong>Tablet-First Schiedsrichtersteuerung:</strong> Erfassen Sie Rennzeiten, Verstöße und senden Sie Echtzeit-Protokolle direkt von der Rennstrecke.",
            ],
          },
        },
      },
    },
    {
      type: "text",
      props: {
        title: "Technische Architektur",
        text: "Die Anwendung basiert auf einer stark entkoppelten Architektur. Das Frontend verwendet Next.js 15 (App Router) mit React 19, ausgestattet mit maßgeschneiderten Glassmorphismus-Komponenten und optimierten Tailwind-Layouts. Das Backend läuft auf NestJS (TypeScript) und MongoDB mit Socket.io für Echtzeit-Benachrichtigungsströme. Eine React Native- und Expo-App synchronisiert das Benutzererlebnis auf mobilen Plattformen.",
      },
    },
  ],
} as const satisfies ProjectContent;
