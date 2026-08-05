import type { ProjectContent } from "../../types";
import bookstore1 from "../../../assets/images/projects/bookstore/bookstore-1.png";
import bookstore2 from "../../../assets/images/projects/bookstore/bookstore-2.png";
import bookstore3 from "../../../assets/images/projects/bookstore/bookstore-3.png";
import bookstore4 from "../../../assets/images/projects/bookstore/bookstore-4.png";

export default {
  title: "Trường Thành Stationery",
  theme: "light",
  tags: ["vue", "flutter", "typescript", "tailwind", "javascript"],
  description:
    "Trường Thành Buchhandlung & Schreibwaren ist eine moderne E-Commerce-Webanwendung und ein mobiles Ökosystem in Vietnam. Entwickelt mit Vue 3 für das Webportal und Flutter für die mobile App, bietet sie ein umfassendes Sortiment an Schreibwaren, Lehrbüchern und Bürobedarf.",
  live: "https://truong-thanh-bookstore.vercel.app/",
  source: "https://github.com/hoangtruong01/Truong_Thanh_Bookstore",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore1,
        alt: "Trường Thành Schreibwaren Homepage",
        caption: "Homepage - Klares, barrierefreies Layout mit einer responsiven Produktsuche und Werbeaktionen.",
      },
    },
    {
      type: "text",
      props: {
        title: "Das Projektziel",
        text: "Die größte Herausforderung dieses Projekts bestand darin, eine hochgradig optimierte E-Commerce-Erfahrung für eine Buchhandlung zu entwerfen. Benutzer sollten in der Lage sein, Hunderte von Schulutensilien, Lehrbüchern und Bürobedarf einfach zu durchsuchen. Um dies zu erreichen, bietet die Benutzeroberfläche flüssige Animationen, responsive Layouts und eine schnelle clientseitige Suchmaschine.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: bookstore2,
        alt: "Kategorieseite",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Funktionen & Architektur",
            items: [
              "<strong>Flutter Companion App:</strong> Eine plattformübergreifende mobile App zur Barcodescannung von Büchern und Echtzeitverfolgung von Bestellungen.",
              "<strong>Kategoriefilter:</strong> Sofortige clientseitige Filterung nach Kategorien wie Lehrbücher, Schreibwaren, Spielzeug und Comics.",
              "<strong>Zustandsgesteuerter Warenkorb:</strong> Ein reaktiver Warenkorb mit persistentem Speicher zur Verwaltung von Mengen und Gutscheinen.",
              "<strong>Nahtlose Authentifizierung:</strong> JWT-basierter Login- und Registrierungs-Workflow mit benutzerdefinierter Formularvalidierung.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore3,
        alt: "Produktdetailseite",
        caption: "Produktdetailseite - Strukturierte Layouts mit detaillierten Beschreibungen, Staffelpreisen und Bewertungen.",
      },
    },
    {
      type: "text",
      props: {
        title: "Entwicklung & Optimierung",
        text: "Entwickelt mit Vue 3 (Composition API), Vite, Tailwind CSS und Flutter. Die Anwendung nutzt modernste Caching-Mechanismen, um Warenkorb-Artikel lokal zu speichern, schnelle Seitennavigation und optimierte Bilder für zügiges Rendering auf Mobilgeräten.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore4,
        alt: "Warenkorbseite",
        caption: "Einkaufswagen & Kasse - Integrierter Warenkorb, der mit dem Client-Status synchronisiert ist.",
      },
    },
  ],
} as const satisfies ProjectContent;
