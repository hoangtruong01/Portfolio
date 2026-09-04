import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    locale.value = window.localStorage.getItem("portfolio-locale") as Locale;
    if (!locale.value) {
      const preferredLocale = navigator.language.split("-")[0] as Locale;

      if (preferredLocale in LOCALES) {
        locale.value = preferredLocale;
      } else {
        locale.value = "en";
      }
    }
  });

  watch(
    locale,
    (newLocale) => {
      if (!newLocale) return;
      window.localStorage.setItem("portfolio-locale", newLocale);
      document.documentElement.lang = newLocale;
    },
    { immediate: true },
  );

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
