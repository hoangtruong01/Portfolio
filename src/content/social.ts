export const social = [
  { url: "mailto:truongnguyenhoang0512@gmail.com", name: "mail" },
  { url: "https://github.com/hoangtruong01", name: "github" },
  { url: "https://www.linkedin.com/", name: "linkedin" },
  { url: "https://zalo.me/0973353430", name: "zalo" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" | "zalo" }[];
