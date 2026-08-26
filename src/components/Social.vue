<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Instagram from "./icons/Instagram.vue";
import Mail from "./icons/Mail.vue";
import X from "./icons/X.vue";
import Zalo from "./icons/Zalo.vue";
import Link from "./Link.vue";
import { t } from "../i18n/utils/translate";
import { locale } from "../i18n/store";
import ButtonRound from "./ButtonRound.vue";
import Button from "./Button.vue";
import zaloQrImg from "../assets/images/zalo-qr.png";

import { social } from "../content/social";

const props = defineProps<{
  variant?: "theme" | "background";
}>();

const showZaloModal = ref(false);
const copied = ref(false);

const openZaloModal = (e: MouseEvent) => {
  e.preventDefault();
  showZaloModal.value = true;
};

const closeZaloModal = () => {
  showZaloModal.value = false;
};

const copyPhoneNumber = async () => {
  try {
    await navigator.clipboard.writeText("0973353430");
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && showZaloModal.value) {
    closeZaloModal();
  }
};

watch(showZaloModal, (isOpen) => {
  if (isOpen) {
    window.addEventListener("keydown", handleKeyDown);
  } else {
    window.removeEventListener("keydown", handleKeyDown);
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

// map icon names to components
const icons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  x: X,
  zalo: Zalo,
  instagram: Instagram,
} as const;

const getAriaLabel = (name: string) => `${t("go-to")} ${name.charAt(0).toUpperCase() + name.slice(1)}`;
</script>

<template>
  <div class="social">
    <template v-for="item in social" :key="item.name">
      <!-- Special handler for Zalo to open QR Modal -->
      <button
        v-if="item.name === 'zalo'"
        type="button"
        @click="openZaloModal"
        :aria-label="getAriaLabel(item.name)"
        class="social-link social-link-button"
        data-cursor="circle-white"
        data-sound="click"
      >
        <ButtonRound
          renderAs="div"
          :variant="props.variant ?? 'theme'"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <component :is="icons[item.name]" :aria-label="getAriaLabel(item.name)" external />
        </ButtonRound>
      </button>

      <Link
        v-else
        external
        :href="item.url"
        :aria-label="getAriaLabel(item.name)"
        class="social-link"
        data-cursor="circle-white"
      >
        <ButtonRound
          renderAs="div"
          :variant="props.variant ?? 'theme'"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <component :is="icons[item.name]" :aria-label="getAriaLabel(item.name)" external />
        </ButtonRound>
      </Link>
    </template>

    <!-- Zalo QR Modal Teleport -->
    <Teleport to="body">
      <Transition name="zalo-fade">
        <div v-if="showZaloModal" class="zalo-modal-backdrop" @click.self="closeZaloModal">
          <div class="zalo-modal-dialog">
            <button class="zalo-modal-close" @click="closeZaloModal" aria-label="Close modal">
              ✕
            </button>
            <div class="zalo-modal-card">
              <div class="zalo-modal-image-wrap">
                <img :src="zaloQrImg" alt="Zalo QR - Trương Nguyễn Hoàng" class="zalo-modal-image" />
              </div>
              <div class="zalo-modal-info">
                <button
                  type="button"
                  class="zalo-modal-phone"
                  @click="copyPhoneNumber"
                  :title="locale === 'vi' ? 'Nhấn để sao chép số điện thoại' : 'Click to copy phone number'"
                >
                  <span class="phone-label">SĐT / Zalo:</span>
                  <span class="phone-number">0973 353 430</span>
                  <span class="copy-badge" :class="{ 'copy-badge-copied': copied }">
                    {{ copied ? (locale === 'vi' ? 'Đã chép! ✓' : 'Copied! ✓') : (locale === 'vi' ? 'Sao chép' : 'Copy') }}
                  </span>
                </button>
                <div class="zalo-modal-actions">
                  <a
                    href="https://zalo.me/0973353430"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="zalo-direct-link"
                  >
                    <Button renderAs="div" variant="accent">
                      {{ locale === 'vi' ? 'Mở Zalo Chat 💬' : 'Open Zalo Chat 💬' }}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  gap: var(--space-md);

  &-link-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
  }
}

.zalo-modal {
  &-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 12, 16, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  &-dialog {
    position: relative;
    max-width: 380px;
    width: 100%;
    background: var(--color-background-400, #f7f3ed);
    border: 1.5px solid color-mix(in srgb, var(--color-text-400) 22%, transparent);
    border-radius: var(--radius-xl, 24px);
    padding: 24px 20px 20px 20px;
    box-shadow:
      0 24px 48px rgba(0, 0, 0, 0.28),
      0 8px 16px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: zalo-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid color-mix(in srgb, var(--color-text-400) 20%, transparent);
    background: color-mix(in srgb, var(--color-background-400) 80%, transparent);
    color: var(--color-text-400);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background: var(--color-text-400);
      color: var(--color-background-400);
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  &-image-wrap {
    width: 100%;
    max-width: 290px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
    border: 1px solid color-mix(in srgb, var(--color-text-400) 12%, transparent);
    background: #ffffff;
  }

  &-image {
    width: 100%;
    height: auto;
    display: block;
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  &-phone {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 30px;
    background: color-mix(in srgb, var(--color-text-400) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-text-400) 18%, transparent);
    color: var(--color-text-400);
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: color-mix(in srgb, var(--color-text-400) 14%, transparent);
      border-color: color-mix(in srgb, var(--color-text-400) 35%, transparent);
      transform: translateY(-1px);
    }

    .phone-label {
      font-size: 11px;
      opacity: 0.75;
      font-weight: 500;
    }

    .phone-number {
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .copy-badge {
      font-size: 10px;
      font-weight: 700;
      background: var(--color-text-400);
      color: var(--color-background-400);
      padding: 2px 7px;
      border-radius: 12px;
      transition: all 0.2s ease;

      &-copied {
        background: #10b981;
        color: #ffffff;
      }
    }
  }

  &-actions {
    width: 100%;
    display: flex;
    justify-content: center;

    .zalo-direct-link {
      text-decoration: none;
      width: 100%;
      max-width: 220px;

      :deep(.button) {
        width: 100%;
      }
    }
  }
}

/* Animations */
.zalo-fade-enter-active,
.zalo-fade-leave-active {
  transition: opacity 0.25s ease;

  .zalo-modal-dialog {
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.zalo-fade-enter-from,
.zalo-fade-leave-to {
  opacity: 0;

  .zalo-modal-dialog {
    transform: scale(0.92) translateY(8px);
  }
}

@keyframes zalo-pop {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
