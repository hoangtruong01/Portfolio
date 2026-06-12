import type { ProjectContent } from "../../types";
import edumeeHero from "../../../assets/images/projects/edumee/edumee-hero.png";
import edumeeFeatures from "../../../assets/images/projects/edumee/edumee_1.png";
import edumeeStudents from "../../../assets/images/projects/edumee/edumee-students.png";

export default {
  title: "Edumee.me",
  theme: "light",
  tags: ["ai", "vue", "tailwind", "typescript"],
  description:
    "An AI-powered career orientation platform designed to help students discover their personality, strengths, and ideal career paths through advanced AI assessments and personalized learning roadmaps.",
  live: "https://edumee.me",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: edumeeHero,
        alt: "Edumee Landing Page",
        caption: "Edumee Landing Page - A sleek, engaging interface for career exploration.",
      },
    },
    {
      type: "text",
      props: {
        title: "The Vision",
        text: "Choosing the right career path is one of the most critical decisions in a student's life. Edumee bridges the gap between self-discovery and professional options. By leveraging artificial intelligence, it provides students with a 5-minute personality assessment, mapping their unique traits to over 500 potential career options with high accuracy.",
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
            title: "Key Features",
            items: [
              "<strong>AI Smart Consultation:</strong> Analyzes 24 personality traits to predict compatibility with 500+ careers.",
              "<strong>Personalized Roadmaps:</strong> Generates step-by-step guides from academic paths to soft skills development.",
              "<strong>Career Simulation:</strong> Offers interactive projects simulated by AI to experience real-world tasks.",
              "<strong>360° Professional Reviews:</strong> Provides insights from active industry professionals.",
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
        alt: "Student Testimonials",
        caption: "Student Testimonials - A growing community of over 10,000+ active learners.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact & Tech Stack",
        text: "Built using modern technologies like Vue.js, TypeScript, and Tailwind CSS on the frontend, combined with robust AI APIs for processing personality traits and generating detailed roadmaps. Over 10,000+ young students in Vietnam have successfully used Edumee to align their academic and professional directions.",
      },
    },
  ],
} as const satisfies ProjectContent;
