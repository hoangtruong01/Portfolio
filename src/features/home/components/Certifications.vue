<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { certificates } from "../../../content/certificates";
import CertCard from "./CertCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import gsap from "gsap";

const sectionRef = ref<HTMLElement | null>(null);
const cardsContainerRef = ref<HTMLElement | null>(null);

// Pagination logic
const CARDS_PER_PAGE = 6;
const currentPage = ref(0);
const totalPages = computed(() => Math.ceil(certificates.length / CARDS_PER_PAGE));
const slideDirection = ref<"next" | "prev">("next");

// Visible cards for current page
const currentCertificates = computed(() => {
  const start = currentPage.value * CARDS_PER_PAGE;
  return certificates.slice(start, start + CARDS_PER_PAGE);
});

// Auto-play state
let timer: ReturnType<typeof setInterval> | null = null;

const nextPage = () => {
  slideDirection.value = "next";
  currentPage.value = (currentPage.value + 1) % totalPages.value;
};

const prevPage = () => {
  slideDirection.value = "prev";
  currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value;
};

const goToPage = (pageIndex: number) => {
  if (pageIndex === currentPage.value) return;
  slideDirection.value = pageIndex > currentPage.value ? "next" : "prev";
  currentPage.value = pageIndex;
};

const startAutoPlay = () => {
  stopAutoPlay();
  timer = setInterval(() => {
    nextPage();
  }, 5000);
};

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

// Smooth staggered GSAP animation on page change
const animateCards = async () => {
  await nextTick();
  if (!cardsContainerRef.value) return;
  const cards = cardsContainerRef.value.querySelectorAll(".cert-card-animated");

  const xOffset = slideDirection.value === "next" ? 30 : -30;

  gsap.fromTo(
    cards,
    { opacity: 0, x: xOffset, scale: 0.96 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
    }
  );
};

watch(currentPage, () => {
  animateCards();
});

let ctx: gsap.Context | null = null;

onMounted(() => {
  startAutoPlay();

  if (!sectionRef.value) return;

  ctx = gsap.context(() => {
    gsap.from(sectionRef.value!.querySelectorAll(".certifications-title, .certifications-controls"), {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 85%",
        once: true,
      },
    });
  }, sectionRef.value);
});

onUnmounted(() => {
  stopAutoPlay();
  ctx?.revert();
});
</script>

<template>
  <div
    class="certifications"
    ref="sectionRef"
    id="certifications"
  >
    <NotchSection class="certifications-notch-start" />
    <NotchSection class="certifications-notch-end" />

    <!-- Header Section -->
    <div class="grid">
      <div class="certifications-header">
        <div class="certifications-title">
          <Banner class="certifications-title-banner" :copy="t('verified')" size="sm" animated />
          <h2 class="certifications-title-copy">{{ t("certifications") }}</h2>
        </div>

        <!-- Soft UI Controls -->
        <div class="certifications-controls">
          <button
            class="nav-btn prev-btn"
            @click="prevPage"
            aria-label="Previous Page"
            data-sound="click"
            data-hoversound="hover"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="page-indicator-pill">
            <span class="current">{{ String(currentPage + 1).padStart(2, "0") }}</span>
            <span class="divider">/</span>
            <span class="total">{{ String(totalPages).padStart(2, "0") }}</span>
          </div>

          <button
            class="nav-btn next-btn"
            @click="nextPage"
            aria-label="Next Page"
            data-sound="click"
            data-hoversound="hover"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Cards Grid Container -->
    <div class="grid">
      <div class="certifications-cards-wrapper">
        <div class="certifications-cards" ref="cardsContainerRef">
          <div
            v-for="(cert, index) in currentCertificates"
            :key="cert.url"
            class="cert-card-animated"
          >
            <CertCard :certificate="cert" :index="currentPage * CARDS_PER_PAGE + index" />
          </div>
        </div>
      </div>
    </div>

    <!-- Soft Capsule Pagination Dots -->
    <div class="certifications-pagination">
      <button
        v-for="(_, pIndex) in totalPages"
        :key="pIndex"
        class="pagination-dot"
        :class="{ active: pIndex === currentPage }"
        @click="goToPage(pIndex)"
        :aria-label="`Go to page ${pIndex + 1}`"
        data-sound="click"
      >
        <span class="dot-inner"></span>
      </button>
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
  padding-top: 112px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 160px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  &-header {
    grid-column: 1 / span 12;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }
  }

  &-title {
    position: relative;
    padding-top: var(--space-lg);

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
      transform: translate(0, -10%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -10%) rotate(-6deg);
      }
    }
  }

  &-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-xs);
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

  &-cards-wrapper {
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }
  }

  &-cards {
    width: 100%;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: 1fr;
    min-height: 460px;

    @include mixins.mq("sm") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.mq("lg") {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: var(--space-xs);
  }
}



/* Nav Controls UI */
.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--color-beige-700) 80%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text-300) 18%, transparent);
  color: var(--color-text-400);
  cursor: pointer;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: var(--color-orange-400);
    color: #fff;
    border-color: var(--color-orange-400);
    box-shadow: 0 8px 20px color-mix(in srgb, var(--color-orange-400) 40%, transparent);
  }

  &:active {
    transform: translateY(0) scale(0.96);
  }
}

.page-indicator-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--color-beige-700) 65%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text-300) 15%, transparent);
  backdrop-filter: blur(10px);
  font-family: var(--font-tech);
  font-size: var(--font-size-xs);
  font-weight: 700;

  .current {
    color: var(--color-orange-400);
  }

  .divider {
    color: var(--color-text-300);
    opacity: 0.5;
  }

  .total {
    color: var(--color-text-300);
  }
}

/* Pagination Capsule Dots */
.pagination-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;

  .dot-inner {
    width: 10px;
    height: 10px;
    border-radius: 99px;
    background: color-mix(in srgb, var(--color-text-300) 30%, transparent);
    transition:
      width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &.active .dot-inner {
    width: 32px;
    background: var(--color-orange-400);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--color-orange-400) 40%, transparent);
  }

  &:hover:not(.active) .dot-inner {
    background: color-mix(in srgb, var(--color-text-300) 65%, transparent);
  }
}

.cert-card-animated {
  display: flex;
}
</style>



