import type { ProjectContent } from "../../types";
import ihouzz1 from "../../../assets/images/projects/ihouzz/ihouzz-1.png";
import ihouzz2 from "../../../assets/images/projects/ihouzz/ihouzz-2.png";
import ihouzz3 from "../../../assets/images/projects/ihouzz/ihouzz-3.png";
import ihouzz4 from "../../../assets/images/projects/ihouzz/ihouzz-4.png";

export default {
  title: "iHouzz.com",
  theme: "light",
  tags: ["vue", "typescript", "nuxt", "tailwind", "maps"],
  description:
    "Eine Premium-PropTech-Plattform in Vietnam, die einen umfassenden Marktplatz für Immobilien bietet. Als Front-End-Entwickler habe ich die Benutzeroberfläche, die interaktive Kartensuche und die Arbeitsabläufe für die Inserate entwickelt und optimiert.",
  live: "https://ihouzz.com",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz1,
        alt: "iHouzz Portal Hero",
        caption: "iHouzz Landing & Immobilienportal - Entwickelt für optimale Geschwindigkeit und Suchbarkeit.",
      },
    },
    {
      type: "text",
      props: {
        title: "Front-End-Architektur",
        text: "Der Aufbau eines stark frequentierten Immobilienportals erfordert einen klaren Fokus auf SEO, Performance und responsives Design. Wir haben Nuxt.js/Vue.js für Server-Side Rendering (SSR) verwendet, um schnelle Ladezeiten und eine perfekte Indexierbarkeit durch Suchmaschinen zu gewährleisten. Das State Management wurde optimiert, um Tausende von Immobilien-Inseraten in Echtzeit flüssig zu verarbeiten.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: ihouzz2,
        alt: "iHouzz Ökosystem",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Wichtigste Beiträge",
            items: [
              "<strong>Interaktive Kartensuche:</strong> Integration von Google Maps und Mapbox-APIs mit benutzerdefiniertem Marker-Clustering für die geografische Echtzeitsuche.",
              "<strong>Erweiterte Suchfilter:</strong> Entwicklung eines zustandsgesteuerten Filtersystems (Preis, Lage, Typ, Ausstattung) mit URL-Synchronisation für teilbare Suchanfragen.",
              "<strong>SEO & SSR-Optimierung:</strong> Strukturierung von Schema-Markups und dynamischen Meta-Tags, was den organischen Traffic erheblich gesteigert hat.",
              "<strong>Responsive & Pixelgenaue UI:</strong> Implementierung flüssiger Layouts mit Tailwind CSS basierend auf präzisen Figma UI/UX-Vorgaben.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz3,
        alt: "iHouzz Lösungen Grid",
        caption: "iHouzz Integrierte Lösungen - Ein einheitliches Ökosystem, das Käufer, Verkäufer und Makler verbindet.",
      },
    },
    {
      type: "text",
      props: {
        title: "Einfluss & Technologien",
        text: "Verwendung von Nuxt.js, Vue 3, Composition API, TypeScript und Pinia für robustes State Management. Durch die Optimierung der Core Web Vitals (LCP/FID) und Lazy Loading konnte die Plattform exzellente Google PageSpeed-Werte erzielen, was die Nutzerbindung verbesserte.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz4,
        alt: "iHouzz Partner & Testimonials",
        caption: "iHouzz Strategische Partner & Kundenbewertungen - Unterstützt von führenden Immobilienmarken.",
      },
    },
  ],
} as const satisfies ProjectContent;
