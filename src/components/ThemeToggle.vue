<script setup lang="ts">
import { isDark, toggleTheme } from "../composables/useTheme";
import ButtonRound from "./ButtonRound.vue";

const props = defineProps<{
  isDarkTheme: boolean;
}>();
</script>

<template>
  <ButtonRound
    variant="theme"
    :class="{ 'theme-toggle-btn': true, 'theme-toggle-btn-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleTheme"
    aria-label="Toggle Theme"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="theme-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="theme-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  </ButtonRound>
</template>

<style scoped lang="scss">
.theme-icon {
  width: 20px;
  height: 20px;
  color: var(--icon-color);
  transition: transform 0.3s ease;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .theme-icon {
    transform: rotate(30deg);
  }

  &-dark {
    background-color: var(--color-dark-blue-500);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }
}
</style>
