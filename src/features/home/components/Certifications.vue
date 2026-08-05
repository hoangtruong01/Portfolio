<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { certificates } from "../../../content/certificates";
import CertCard from "./CertCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  if (!cardsRef.value) return;

  ctx = gsap.context(() => {
    const cards = cardsRef.value!.querySelectorAll(".cert-card-animated");

    gsap.set(cards, {
      opacity: 0,
      y: 40,
    });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
      start: "top 85%",
      once: true,
    });
  }, sectionRef.value!);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <div class="certifications" ref="sectionRef" id="certifications">
    <NotchSection class="certifications-notch-start" />
    <NotchSection class="certifications-notch-end" />

    <div class="grid">
      <div class="certifications-title">
        <Banner class="certifications-title-banner" :copy="t('verified')" size="sm" animated />
        <h2 class="certifications-title-copy">{{ t("certifications") }}</h2>
      </div>
    </div>

    <div class="grid">
      <div class="certifications-cards" ref="cardsRef">
        <div v-for="(cert, index) in certificates" :key="cert.url" class="cert-card-animated">
          <CertCard :certificate="cert" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.certifications {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-600);
  min-height: calc(var(--lvh) * 80);
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards {
    max-width: 100%;
    flex: 1;
    grid-column: 1 / span 12;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: 1fr;

    @include mixins.mq("sm") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.mq("lg") {
      grid-template-columns: repeat(3, 1fr);
      grid-column: 3 / span 8;
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.cert-card-animated {
  display: flex;
}
</style>
