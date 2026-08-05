import { ref } from "vue";

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const isDark = ref(savedTheme === "dark");

export const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme();
};

export const applyTheme = () => {
  if (typeof document !== "undefined") {
    if (isDark.value) {
      document.documentElement.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    }
  }
};
