import type { ProjectContent } from "../../types";
import edumeeHero from "../../../assets/images/projects/edumee/edumee-hero.png";
import edumeeFeatures from "../../../assets/images/projects/edumee/edumee_1.png";
import edumeeStudents from "../../../assets/images/projects/edumee/edumee-students.png";

export default {
  title: "Edumee.me",
  theme: "light",
  tags: ["ai", "vue", "tailwind", "typescript"],
  description: "Eine KI-gestützte Plattform zur Berufsorientierung, die Schülern und Studenten hilft, ihre Persönlichkeit, Stärken und idealen Karrierewege durch fortschrittliche KI-Analysen und personalisierte Lern-Roadmaps zu entdecken.",
  live: "https://edumee.me",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: edumeeHero,
        alt: "Edumee Landing Page",
        caption: "Edumee Landing Page - Eine moderne und ansprechende Benutzeroberfläche zur Berufserkundung.",
      },
    },
    {
      type: "text",
      props: {
        title: "Die Vision",
        text: "Die Wahl des richtigen Karrierewegs ist eine der wichtigsten Entscheidungen im Leben eines Schülers. Edumee schließt die Lücke zwischen Selbsterkenntnis und beruflichen Möglichkeiten. Mithilfe künstlicher Intelligenz bietet es eine 5-minütige Persönlichkeitsanalyse, die individuelle Eigenschaften mit hoher Genauigkeit auf über 500 potenzielle Berufsfelder abstimmt.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: edumeeFeatures,
        alt: "Edumee Bento-Grid Features",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Hauptmerkmale",
            items: [
              "<strong>AI Smart Consultation:</strong> Analysiert 24 Persönlichkeitsmerkmale, um die Kompatibilität mit über 500 Berufen vorherzusagen.",
              "<strong>Personalisierte Roadmaps:</strong> Erstellt Schritt-für-Schritt-Anleitungen von akademischen Pfaden bis hin zur Entwicklung von Soft Skills.",
              "<strong>Berufssimulation:</strong> Bietet interaktive, von KI simulierte Projekte, um reale Aufgaben kennenzulernen.",
              "<strong>360°-Bewertungen:</strong> Bietet Einblicke von aktiven Fachleuten aus der Praxis.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edumeeStudents,
        alt: "Kundenstimmen",
        caption: "Kundenstimmen - Eine wachsende Community von über 10.000 aktiven Lernenden.",
      },
    },
    {
      type: "text",
      props: {
        title: "Einfluss & Technologie-Stack",
        text: "Entwickelt mit modernen Technologien wie Vue.js, TypeScript und Tailwind CSS im Frontend, kombiniert mit robusten KI-Schnittstellen zur Verarbeitung von Persönlichkeitsmerkmalen und Generierung detaillierter Roadmaps. Über 10.000 Schüler und Studenten in Vietnam haben Edumee bereits erfolgreich genutzt, um ihre akademische und berufliche Richtung zu bestimmen.",
      },
    },
  ],
} as const satisfies ProjectContent;
