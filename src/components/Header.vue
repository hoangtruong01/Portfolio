<script setup lang="ts">
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { computed, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { lenis } from "../composables/useScroll";
import { projectId } from "../composables/useRouteObserver";
import ButtonRound from "./ButtonRound.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import SoundsToggle from "./SoundsToggle.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { isFeatureEnabled } from "../utils/features";
import { useRouter } from "../composables/useRouter";
import { useFirstRoute } from "../composables/useFirstRoute";

const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const scrolledPastHeroVisible = ref(false);
const { isDarkTheme } = useHeaderTheme({
  onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
    if (!element || !boundingClientRect) {
      scrolledPastHeroVisible.value = false;
      return;
    }

    if (hasScrolledIntoView) {
      scrolledPastHeroVisible.value = true;
    } else {
      scrolledPastHeroVisible.value = false;
    }
  },
});

const handleBackClick = () => {
  // If it's the first route the user visited, navigate to home
  // Otherwise, go back in browser history
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

const handleLogoClick = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const classNames = computed(() => {
  return {
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  };
});

const resumeUrl = "https://drive.google.com/file/d/18zX6o6V0yHpsVPvF3gBj4mMqShABWGlH/view?usp=sharing";

const resumeClassNames = computed(() => {
  return {
    "header-resume": true,
    "header-resume-dark": isDarkTheme.value,
    "header-resume-isProjectPage": projectId.value !== null,
  };
});
</script>

<template>
  <header :class="classNames">
    <div class="header-left">
      <ButtonRound
        v-if="projectId !== null"
        variant="accent"
        @click="handleBackClick"
        :aria-label="t('back-to-home')"
        :class="{ 'header-back': true, 'header-back-isProjectPage': projectId !== null }"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="header-back-icon" />
      </ButtonRound>
    </div>
    <div
      :class="{
        'header-logo': true,
        'header-logo-isProjectPage': projectId !== null,
        'header-logo-clickable': scrolledPastHeroVisible,
        'children-unclickable': true,
      }"
      @click="handleLogoClick"
      data-sound="click"
      data-hoversound="hover"
      data-cursor="circle-white"
    >
      <Logo class="header-logo-image" />
    </div>
    <div class="header-right">
      <Button
        renderAs="a"
        variant="border"
        :href="resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="t('resume')"
        :class="resumeClassNames"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <span>{{ t("resume") }}</span>
        <svg
          class="header-resume-icon"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </Button>
      <ThemeToggle :isDarkTheme="isDarkTheme" />
      <SoundsToggle class="header-sounds-toggle" :isDarkTheme="isDarkTheme" v-if="isFeatureEnabled('sounds')" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  width: var(--breakpoint-xxxl);
  padding: 0 var(--space-outer);
  max-width: 100%;
  z-index: var(--z-index-header);
  height: var(--height-header);
  pointer-events: none;

  --scrolled: 0;

  &-scrolled {
    --scrolled: 1;
  }

  &-back {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transition-delay: 0.1s;
    pointer-events: auto;

    &-icon {
      width: 100%;
      transform: rotate(180deg);
    }

    &-isProjectPage {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &-left {
    position: absolute;
    left: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
  }

  &-resume {
    display: none;
    align-items: center;
    gap: 6px;
    width: fit-content;
    border: 1.5px solid var(--color-text-400);
    color: var(--color-text-400);
    background-color: transparent;
    padding: 0 16px;
    height: 38px;
    font-size: var(--font-size-sm);
    letter-spacing: 0.02em;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 100px;
    transition:
      background-color 0.15s ease-in-out,
      color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      transform 0.15s ease-in-out;

    @include mixins.mq("md") {
      display: flex;
    }

    @include mixins.mq("xl") {
      padding: 0 20px;
      height: 44px;
      font-size: var(--font-size-md);
    }

    &-isProjectPage {
      opacity: 1 !important;
    }

    &-icon {
      width: 12px;
      height: 12px;
      stroke: currentColor;
      transition: transform 0.2s var(--ease-smooth);
      flex-shrink: 0;

      @include mixins.mq("xl") {
        width: 13px;
        height: 13px;
      }
    }

    @include mixins.hover {
      &:hover {
        background-color: var(--color-black-400);
        color: var(--color-white-400);
        border-color: var(--color-black-400);

        .header-resume-icon {
          transform: translate(2px, -2px);
        }
      }
    }

    &-dark {
      border-color: rgba(255, 255, 255, 0.45);
      color: var(--color-white-400);

      @include mixins.hover {
        &:hover {
          background-color: var(--color-cyan-500);
          border-color: var(--color-cyan-500);
          color: var(--color-white-400);
        }
      }
    }
  }

  &-right {
    position: absolute;
    right: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    @include mixins.mq("xl") {
      gap: var(--space-sm);
    }
  }

  &-music-toggle {
    display: flex;
  }

  &-dark {
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }

  &-logo {
    cursor: pointer;
    display: flex;
    gap: var(--space-xs);
    transition: color 0.2s ease-in-out;
    opacity: var(--scrolled);
    pointer-events: none;

    &-clickable {
      pointer-events: all;
    }

    @include mixins.mq("md") {
      gap: var(--space-sm);
    }

    &-isProjectPage {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      opacity: 0;
    }

    &-image {
      width: 36px;

      @include mixins.mq("md") {
        width: 40px;
      }
    }

    &-text {
      font-weight: 900;
      font-size: 18px;

      @include mixins.mq("md") {
        font-size: 20px;
      }
    }
  }
}
</style>
