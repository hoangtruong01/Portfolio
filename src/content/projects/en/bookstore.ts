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
    "Trường Thành Bookstore & Stationery is a modern retail web application and mobile ecosystem in Vietnam. Built with Vue 3 for the web portal and Flutter for the mobile app, it offers a comprehensive catalogue of stationery, textbooks, and office supplies with stateful carts, order scanning, and instant searching.",
  live: "https://truong-thanh-bookstore.vercel.app/",
  source: "https://github.com/hoangtruong01/Truong_Thanh_Bookstore",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore1,
        alt: "Trường Thành Stationery Home",
        caption: "Homepage - Clean, accessible layout with a responsive product search and promotional sections.",
      },
    },
    {
      type: "text",
      props: {
        title: "The Project Goal",
        text: "The main challenge of this project was to design a highly optimized e-commerce bookstore experience. Users should be able to easily browse hundreds of school utensils, textbooks, and office supplies. To achieve this, the interface incorporates fluid animations, strict responsive layout standards, and a fast, client-side search engine.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: bookstore2,
        alt: "Category Page",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Features & Architecture",
            items: [
              "<strong>Flutter Companion App:</strong> A cross-platform mobile application supporting instant barcode scanning of books and live tracking of orders.",
              "<strong>Category Filtering:</strong> Instant client-side filtering by categories like Textbook, Stationery, Toys, and Comics.",
              "<strong>Stateful Shopping Cart:</strong> A reactive shopping cart built with persistent storage, managing quantities, and coupon applications.",
              "<strong>Seamless Authentication:</strong> JWT-based login/register flow with custom form validation and security checks.",
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
        alt: "Product Detail Page",
        caption: "Product Detail - Structured layouts featuring detailed descriptions, price breaks, and reviews.",
      },
    },
    {
      type: "text",
      props: {
        title: "Development & Optimization",
        text: "Built using Vue 3 (Composition API), Vite, Tailwind CSS, and Flutter. The app features state-of-the-art caching mechanism to preserve local cart items, fast page navigation, and highly optimized images for quick page rendering over slow mobile networks.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore4,
        alt: "Stateful Shopping Cart Page",
        caption: "Shopping Cart & Checkout - Integrated local/global cart synchronized with client state.",
      },
    },
  ],
} as const satisfies ProjectContent;
