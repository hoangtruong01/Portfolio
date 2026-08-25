<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";
import CareerTimeline from "./CareerTimeline.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <Social variant="background" />
      <CareerTimeline />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);
  padding-bottom: var(--space-lg);
  display: flex;
  align-items: center;

  @include mixins.mq("md") {
    max-height: calc(var(--lvh) * 100);
    overflow: hidden;
    padding-top: var(--space-lg);
    padding-bottom: var(--space-lg);
  }

  &-content {
    position: relative;
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    max-width: 48vw;
    z-index: 5;

    @include mixins.mq("sm") {
      grid-column: 1 / 9;
      max-width: 440px;
      gap: var(--space-xs);
    }

    @include mixins.mq("md") {
      grid-column: 1 / 7;
      max-width: 480px;
      gap: var(--space-sm);
    }

    @include mixins.mq("lg") {
      grid-column: 1 / 6;
      max-width: 490px;
    }

    @include mixins.mq("xl") {
      grid-column: 2 / 6;
      max-width: 500px;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: 22px;
    line-height: 1.05;

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-sm);
    }

    @include mixins.mq("md") {
      font-size: var(--font-size-title-md);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-lg);
    }
  }
}
</style>
