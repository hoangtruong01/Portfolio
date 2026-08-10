export const namespaces = {
  common: import.meta.glob("./namespaces/common/*.json", { eager: true }),
} as const;

