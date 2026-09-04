<script setup lang="ts">
import { ref } from "vue";
import type { Certificate } from "../../../content/certificates";

defineProps<{
  certificate: Certificate;
  index: number;
}>();

const cardRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);
</script>

<template>
  <a
    :href="certificate.url"
    target="_blank"
    rel="noopener noreferrer"
    class="cert-card"
    :class="{ 'cert-card-hovered': isHovered }"
    ref="cardRef"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    data-cursor="circle"
    data-sound="click"
    data-hoversound="hover"
  >
    <!-- Glow border effect -->
    <div class="cert-card-glow" :style="{ '--issuer-color': certificate.issuerColor }"></div>

    <div class="cert-card-content">
      <!-- Issuer badge -->
      <div class="cert-card-badge" :style="{ '--issuer-color': certificate.issuerColor }">
        <img
          v-if="certificate.issuerLogo"
          :src="certificate.issuerLogo"
          :alt="certificate.issuer + ' logo'"
          class="cert-card-badge-logo"
        />
        <span v-else class="cert-card-badge-text">{{ certificate.issuerShort }}</span>
      </div>

      <!-- Info -->
      <div class="cert-card-info">
        <h3 class="cert-card-name">{{ certificate.name }}</h3>
        <p class="cert-card-issuer">{{ certificate.issuer }}</p>
      </div>

      <!-- Footer -->
      <div class="cert-card-footer">
        <span class="cert-card-date">{{ certificate.date }}</span>
        <span class="cert-card-link">
          View Certificate
          <svg class="cert-card-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.cert-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px -10px color-mix(in srgb, var(--issuer-color) 25%, transparent);
  }

  &-glow {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--issuer-color) 45%, transparent),
      transparent 50%,
      color-mix(in srgb, var(--issuer-color) 25%, transparent)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  &:hover &-glow {
    opacity: 1;
  }

  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: color-mix(in srgb, var(--color-beige-700) 65%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    height: 100%;
    transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover &-content {
    background: color-mix(in srgb, var(--color-beige-700) 88%, transparent);
  }

  &-badge {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    flex-shrink: 0;

    &-text {
      font-family: var(--font-tech);
      font-weight: 900;
      font-size: var(--font-size-md);
      color: var(--issuer-color);
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    &-logo {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    flex: 1;
  }

  &-name {
    font-weight: 800;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-title);
    letter-spacing: 0.01em;
    color: var(--color-text-400);

    @include mixins.mq("lg") {
      font-size: var(--font-size-xl);
    }
  }

  &-issuer {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    font-weight: 500;
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-xs);
    border-top: 1px solid color-mix(in srgb, var(--color-text-300) 15%, transparent);
  }

  &-date {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
    font-family: var(--font-tech);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &-link {
    display: flex;
    align-items: center;
    gap: var(--space-xxs);
    font-size: var(--font-size-xs);
    font-weight: 700;
    color: var(--color-orange-400);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: gap 0.25s var(--ease-smooth);

    &-icon {
      transition: transform 0.25s var(--ease-smooth);
    }
  }

  &:hover &-link {
    gap: var(--space-xs);

    &-icon {
      transform: translate(2px, -2px);
    }
  }
}
</style>
