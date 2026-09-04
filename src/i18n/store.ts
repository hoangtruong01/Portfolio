import { ref } from "vue";
import type { Locale } from "./types";
import enTranslations from "./messages/namespaces/common/en.json";

export const locale = ref<Locale>("en");
export const translations = ref<Record<string, string>>(enTranslations);
