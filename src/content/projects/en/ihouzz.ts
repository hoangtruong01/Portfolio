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
    "A premium PropTech platform in Vietnam, offering a comprehensive real estate marketplace. As a Front-end Developer, I built and optimized the user interface, interactive map searches, and listing workflows to deliver a seamless property browsing experience.",
  live: "https://ihouzz.com",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz1,
        alt: "iHouzz Portal Hero",
        caption: "iHouzz Landing & Property Portal - Designed for optimal speed and searchability.",
      },
    },
    {
      type: "text",
      props: {
        title: "Front-end Architecture",
        text: "Building a high-traffic property portal requires a focus on SEO, performance, and responsive design. We utilized Nuxt.js/Vue.js to handle Server-Side Rendering (SSR) for real estate listing pages, enabling instant load times and perfect indexability by search engines. The state management system was optimized to handle thousands of real-time property listings smoothly.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: ihouzz2,
        alt: "iHouzz Ecosystem",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Key Contributions",
            items: [
              "<strong>Interactive Map Search:</strong> Integrated Google Maps and Mapbox APIs with custom marker clusterers to browse properties geographically in real-time.",
              "<strong>Advanced Search Filtering:</strong> Engineered a stateful search filter system (price, location, property type, amenities) with URL synchronization for shareable queries.",
              "<strong>SEO & SSR Optimization:</strong> Structured schema markup and dynamic meta tags for property listings, increasing organic search traffic.",
              "<strong>Responsive & Pixel-Perfect UI:</strong> Implemented fluid layouts using Tailwind CSS following strict Figma UI/UX designs.",
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
        alt: "iHouzz Solutions Grid",
        caption: "iHouzz Integrated Solutions - A unified ecosystem connecting buyers, sellers, and agents.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact & Technologies",
        text: "Leveraging Nuxt.js, Vue 3, Composition API, TypeScript, and Pinia for robust state management. By optimizing core web vitals (improving LCP and FID) and implementing image lazy loading, the platform achieved high Google PageSpeed scores, driving better user retention and successful real estate transactions.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz4,
        alt: "iHouzz Partners & Testimonials",
        caption: "iHouzz Strategic Partners & Client Testimonials - Trusted by top real estate brands.",
      },
    },
  ],
} as const satisfies ProjectContent;
