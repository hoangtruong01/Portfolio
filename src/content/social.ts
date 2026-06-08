export const social = [
  { url: "mailto:hello@example.com", name: "mail" },
  { url: "https://github.com/", name: "github" },
  { url: "https://www.linkedin.com/", name: "linkedin" },
  { url: "https://x.com/", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
