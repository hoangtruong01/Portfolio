<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { milestones } from "../../../content/timeline";
import { locale } from "../../../i18n/store";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  if (!timelineRef.value) return;

  ctx = gsap.context(() => {
    // Animate spine line drawing down
    gsap.from(".timeline-spine-line", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: timelineRef.value,
        start: "top 90%",
        once: true,
      },
    });

    // Stagger in items
    const items = timelineRef.value!.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      const node = item.querySelector(".timeline-node");
      const colLeft = item.querySelector(".timeline-col-left");
      const colRight = item.querySelector(".timeline-col-right");
      const mobContent = item.querySelector(".timeline-mob-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 94%",
          once: true,
        },
      });

      tl.from(node, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        delay: index * 0.05,
        ease: "back.out(2)",
      });

      if (colLeft) {
        tl.from(
          colLeft,
          {
            x: -12,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      if (colRight) {
        tl.from(
          colRight,
          {
            x: 12,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25"
        );
      }

      if (mobContent) {
        tl.from(
          mobContent,
          {
            x: 12,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25"
        );
      }
    });
  }, timelineRef.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <div class="career-timeline" ref="timelineRef">
    <!-- Spine vertical line -->
    <div class="timeline-spine">
      <div class="timeline-spine-line"></div>
    </div>

    <!-- Milestones List -->
    <div class="timeline-items">
      <div
        v-for="(item, index) in milestones"
        :key="item.id"
        class="timeline-item"
        :class="[
          item.side === 'left' ? 'item-left-card' : 'item-right-card',
          `item-${index}`
        ]"
      >
        <!-- ============================================== -->
        <!-- TABLET & DESKTOP: Alternating Layout           -->
        <!-- ============================================== -->

        <!-- DESKTOP LEFT COLUMN -->
        <div class="timeline-col timeline-col-left desktop-only">
          <!-- When side === 'left': Content Card on the LEFT -->
          <div
            v-if="item.side === 'left'"
            class="timeline-card"
            data-cursor="circle-white"
            data-sound="click"
            data-hoversound="hover"
          >
            <div class="timeline-card-inner">
              <div class="timeline-title-wrap">
                <div class="timeline-title-row">
                  <div v-if="item.logo" class="timeline-item-logo-box">
                    <img :src="item.logo" :alt="locale === 'vi' ? item.title.vi : item.title.en" class="timeline-item-logo" />
                  </div>
                  <h3 class="timeline-title">
                    {{ locale === 'vi' ? item.title.vi : item.title.en }}
                  </h3>
                </div>
                <!-- Underline doodle -->
                <svg
                  v-if="item.underlineStyle === 'wavy'"
                  class="doodle-underline wavy"
                  viewBox="0 0 100 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5C12 2 20 8 30 5C40 2 48 8 58 5C68 2 76 8 86 5C92 3 95 4 98 5"
                    stroke="var(--timeline-accent)"
                    stroke-width="2.8"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  v-else-if="item.underlineStyle === 'brush'"
                  class="doodle-underline brush"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 3C28 1.5 60 4.5 98 3"
                    stroke="var(--timeline-accent)"
                    stroke-width="3.2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  v-else
                  class="doodle-underline simple"
                  viewBox="0 0 100 5"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 2.5H98"
                    stroke="var(--timeline-accent)"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <!-- Role & Company -->
              <div v-if="item.role" class="timeline-meta">
                <span class="timeline-role">{{ locale === 'vi' ? item.role.vi : item.role.en }}</span>
                <span v-if="item.company" class="timeline-company">{{ locale === 'vi' ? item.company.vi : item.company.en }}</span>
              </div>

              <!-- Description -->
              <p class="timeline-desc">
                {{ locale === 'vi' ? item.description.vi : item.description.en }}
              </p>
            </div>
          </div>

          <!-- When side === 'right': Year on the LEFT -->
          <div v-else class="timeline-year-wrap year-on-left">
            <!-- Sunburst doodle rays -->
            <div class="doodle-rays rays-top-left">
              <svg viewBox="0 0 24 24" fill="none" class="rays-svg">
                <path d="M4 8L9 12" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
                <path d="M11 3L12 9" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
                <path d="M19 5L15 10" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
              </svg>
            </div>
            <span class="timeline-year-text">{{ item.year }}</span>
          </div>
        </div>

        <!-- NODE with horizontal connectors -->
        <div class="timeline-node-wrap">
          <div class="timeline-branch branch-left desktop-only"></div>
          <div class="timeline-node">
            <div class="timeline-node-core"></div>
          </div>
          <div class="timeline-branch branch-right desktop-only"></div>
        </div>

        <!-- DESKTOP RIGHT COLUMN -->
        <div class="timeline-col timeline-col-right desktop-only">
          <!-- When side === 'right': Content Card on the RIGHT -->
          <div
            v-if="item.side === 'right'"
            class="timeline-card"
            data-cursor="circle-white"
            data-sound="click"
            data-hoversound="hover"
          >
            <div class="timeline-card-inner">
              <div class="timeline-title-wrap">
                <div class="timeline-title-row">
                  <div v-if="item.logo" class="timeline-item-logo-box">
                    <img :src="item.logo" :alt="locale === 'vi' ? item.title.vi : item.title.en" class="timeline-item-logo" />
                  </div>
                  <h3 class="timeline-title">
                    {{ locale === 'vi' ? item.title.vi : item.title.en }}
                  </h3>

                  <!-- Star Doodle for Final-year IT -->
                  <div v-if="item.hasStar" class="doodle-star">
                    <svg viewBox="0 0 24 24" fill="none" class="star-svg">
                      <path
                        d="M12 2.5L14.7 8.5L21.2 9.2L16.3 13.7L17.7 20.2L12 16.9L6.3 20.2L7.7 13.7L2.8 9.2L9.3 8.5L12 2.5Z"
                        stroke="var(--color-text-400)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Underline doodle -->
                <svg
                  v-if="item.underlineStyle === 'wavy'"
                  class="doodle-underline wavy"
                  viewBox="0 0 100 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5C12 2 20 8 30 5C40 2 48 8 58 5C68 2 76 8 86 5C92 3 95 4 98 5"
                    stroke="var(--timeline-accent)"
                    stroke-width="2.8"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  v-else-if="item.underlineStyle === 'brush'"
                  class="doodle-underline brush"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 3C28 1.5 60 4.5 98 3"
                    stroke="var(--timeline-accent)"
                    stroke-width="3.2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  v-else
                  class="doodle-underline simple"
                  viewBox="0 0 100 5"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 2.5H98"
                    stroke="var(--timeline-accent)"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <!-- Role & Company -->
              <div v-if="item.role" class="timeline-meta">
                <span class="timeline-role">{{ locale === 'vi' ? item.role.vi : item.role.en }}</span>
                <span v-if="item.company" class="timeline-company">{{ locale === 'vi' ? item.company.vi : item.company.en }}</span>
              </div>

              <!-- Description -->
              <p class="timeline-desc">
                {{ locale === 'vi' ? item.description.vi : item.description.en }}
              </p>
            </div>
          </div>

          <!-- When side === 'left': Year on the RIGHT -->
          <div v-else class="timeline-year-wrap year-on-right">
            <span class="timeline-year-text">{{ item.year }}</span>
            <!-- Sunburst doodle rays -->
            <div class="doodle-rays rays-top-right">
              <svg viewBox="0 0 24 24" fill="none" class="rays-svg">
                <path d="M5 5L9 10" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
                <path d="M13 3L12 9" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
                <path d="M20 8L15 12" stroke="var(--timeline-accent)" stroke-width="2.4" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- MOBILE ONLY: Compact Left-Spine Card           -->
        <!-- Fits neatly in the left 58vw column            -->
        <!-- ============================================== -->
        <div class="timeline-mob-content mobile-only">
          <div class="mob-header">
            <div v-if="item.logo" class="mob-item-logo-box">
              <img :src="item.logo" :alt="locale === 'vi' ? item.title.vi : item.title.en" class="mob-item-logo" />
            </div>
            <span class="mob-year">{{ item.year }}</span>
            <span class="mob-title">{{ locale === 'vi' ? item.title.vi : item.title.en }}</span>
            <span v-if="item.hasStar" class="mob-star">⭐</span>
          </div>

          <div v-if="item.role" class="mob-meta">
            <span class="mob-role">{{ locale === 'vi' ? item.role.vi : item.role.en }}</span>
            <span v-if="item.company" class="mob-company">{{ locale === 'vi' ? item.company.vi : item.company.en }}</span>
          </div>

          <p class="mob-desc">{{ locale === 'vi' ? item.description.vi : item.description.en }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.career-timeline {
  --timeline-accent: #c25400;
  --timeline-badge-bg: rgba(194, 84, 0, 0.12);
  --timeline-badge-text: #963b00;
  --timeline-badge-border: rgba(194, 84, 0, 0.28);

  position: relative;
  width: 100%;
  margin: 0;
  padding: 2px 0 0 0;
}

:global(html.theme-dark) .career-timeline {
  --timeline-accent: #ff9d3b;
  --timeline-badge-bg: rgba(255, 157, 59, 0.18);
  --timeline-badge-text: #ffb86c;
  --timeline-badge-border: rgba(255, 157, 59, 0.35);
}

/* Visibility helpers */
.desktop-only {
  display: none !important;

  @include mixins.mq("sm") {
    display: flex !important;
  }
}

.mobile-only {
  display: flex !important;

  @include mixins.mq("sm") {
    display: none !important;
  }
}

/* Spine */
.timeline-spine {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 6px;
  width: 1.5px;
  transform: translateX(-50%);

  @include mixins.mq("sm") {
    left: 50%;
    width: 2px;
    top: 14px;
    bottom: 14px;
  }

  &-line {
    width: 100%;
    height: 100%;
    background: color-mix(in srgb, var(--color-text-400) 25%, transparent);
    border-radius: 1px;
  }
}

/* Items List */
.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 1;

  @include mixins.mq("sm") {
    gap: 10px;
  }

  @include mixins.mq("md") {
    gap: 12px;
  }
}

/* Single Item Row */
.timeline-item {
  display: grid;
  grid-template-columns: 14px 1fr;
  align-items: flex-start;
  position: relative;
  width: 100%;
  gap: 6px;

  @include mixins.mq("sm") {
    grid-template-columns: 1fr 36px 1fr;
    align-items: center;
    gap: 0;
  }
}

/* Node Wrap */
.timeline-node-wrap {
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding-top: 3px;

  @include mixins.mq("sm") {
    grid-column: 2 / 3;
    padding-top: 0;
  }
}

.timeline-branch {
  height: 2px;
  background: color-mix(in srgb, var(--color-text-400) 28%, transparent);
  flex: 1;
}

.timeline-node {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1.8px solid var(--color-text-400);
  background: var(--color-background-400, #f5efe6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;

  @include mixins.mq("sm") {
    width: 14px;
    height: 14px;
    border-width: 2px;
  }

  &-core {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--timeline-accent);
    transition: transform 0.25s ease;

    @include mixins.mq("sm") {
      width: 5px;
      height: 5px;
    }
  }
}

.timeline-item:hover .timeline-node {
  transform: scale(1.3);
  border-color: var(--timeline-accent);

  .timeline-node-core {
    transform: scale(1.25);
  }
}

/* Columns for Tablet & Desktop */
.timeline-col {
  align-items: center;

  &-left {
    justify-content: flex-end;
    padding-right: 8px;
    text-align: right;
  }

  &-right {
    padding-left: 8px;
    text-align: left;
  }
}

/* Year Styling Desktop */
.timeline-year-wrap {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 1px 3px;
}

.timeline-year-text {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 900;
  color: var(--timeline-accent);
  letter-spacing: 0.02em;
  line-height: 1;

  @include mixins.mq("md") {
    font-size: 18px;
  }
}

/* Doodles Desktop */
.doodle-rays {
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.rays-top-left {
    transform: translateY(-4px) rotate(-10deg);
  }

  &.rays-top-right {
    transform: translateY(-4px) rotate(10deg);
  }

  .rays-svg {
    width: 100%;
    height: 100%;
  }
}

.doodle-star {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--color-text-400);
  margin-left: 4px;
  transform: rotate(12deg);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  .star-svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: rotate(72deg) scale(1.25);
    color: var(--timeline-accent);
  }
}

.doodle-underline {
  display: block;
  width: 100%;
  max-width: 75px;
  height: 5px;
  margin-top: 2px;
  opacity: 0.9;

  &.wavy {
    height: 6px;
  }

  &.brush {
    height: 5px;
  }

  &.simple {
    height: 3.5px;
  }
}

/* Card Content Container Desktop */
.timeline-card {
  width: 100%;
  max-width: 220px;
  padding: 6px 10px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--color-beige-700) 32%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text-300) 16%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease,
    background 0.25s ease;
  cursor: default;

  @include mixins.mq("md") {
    max-width: 230px;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    background: color-mix(in srgb, var(--color-beige-700) 50%, transparent);
    border-color: color-mix(in srgb, var(--timeline-accent) 45%, transparent);
    box-shadow: 0 4px 16px color-mix(in srgb, var(--timeline-accent) 12%, rgba(0, 0, 0, 0.05));
  }

  &-inner {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
}

.item-left-card .timeline-card {
  margin-left: auto;
  text-align: right;

  .timeline-title-wrap {
    align-items: flex-end;
  }

  .timeline-title-row {
    justify-content: flex-end;
  }

  .doodle-underline {
    margin-left: auto;
  }

  .timeline-meta {
    justify-content: flex-end;
  }
}

.timeline-title-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
}

.timeline-title-row {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.timeline-item-logo-box {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid color-mix(in srgb, var(--color-text-400) 18%, transparent);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  @include mixins.mq("md") {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
}

.timeline-item-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mob-item-logo-box {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 0.8px solid color-mix(in srgb, var(--color-text-400) 20%, transparent);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 2px;
}

.mob-item-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-title {
  font-size: 13px;
  font-weight: 800;
  color: var(--color-text-400);
  letter-spacing: -0.01em;
  line-height: 1.15;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  @include mixins.mq("md") {
    font-size: 13.8px;
  }
}

.timeline-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 9px;
  font-family: "ProFontWindows", monospace;
  font-weight: 700;

  @include mixins.mq("md") {
    font-size: 9.5px;
  }
}

.timeline-role {
  color: var(--timeline-badge-text);
  background: var(--timeline-badge-bg);
  border: 1px solid var(--timeline-badge-border);
  padding: 1px 5px;
  border-radius: 4px;
  letter-spacing: 0.01em;
}

.timeline-company {
  color: var(--color-text-300);
  opacity: 0.95;
}

.timeline-desc {
  font-size: 10.5px;
  color: var(--color-text-300);
  line-height: 1.3;
  margin-top: 1px;

  @include mixins.mq("md") {
    font-size: 11px;
  }
}

/* ========================================= */
/* MOBILE COMPACT STYLES (< 480px)           */
/* ========================================= */
.timeline-mob-content {
  grid-column: 2 / 3;
  flex-direction: column;
  gap: 1px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 1px 0 2px 0;
}

.mob-header {
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  gap: 4px;
  overflow: hidden;
  line-height: 1.15;
}

.mob-year {
  font-family: "Urbanist", sans-serif;
  font-weight: 900;
  font-size: 13px;
  color: var(--timeline-accent);
}

.mob-title {
  font-size: 10.5px;
  font-weight: 800;
  color: var(--color-text-400);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.mob-star {
  font-size: 9.5px;
}

.mob-meta {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  font-size: 8px;
  font-family: "ProFontWindows", monospace;
  font-weight: 700;
  overflow: hidden;
}

.mob-role {
  color: var(--timeline-badge-text);
  background: var(--timeline-badge-bg);
  padding: 0 4px;
  border-radius: 3px;
  border: 1px solid var(--timeline-badge-border);
}

.mob-company {
  color: var(--color-text-300);
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mob-desc {
  font-size: 8.5px;
  color: var(--color-text-300);
  line-height: 1.18;
  margin-top: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
