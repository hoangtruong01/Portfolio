export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "ai"
  | "vue"
  | "tailwind"
  | "nuxt"
  | "maps"
  | "flutter"
  | "typescript";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  ai: "AI / LLM",
  vue: "Vue.js",
  tailwind: "Tailwind CSS",
  nuxt: "Nuxt.js",
  maps: "Google Maps",
  flutter: "Flutter",
  typescript: "TypeScript",
} as const satisfies Record<TagVariant, string>;
