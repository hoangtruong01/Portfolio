<script setup lang="ts">
import { ref } from "vue";
import {
  shirtColor,
  pantsColor,
  hairColor,
  skinColor,
  faceExpression,
  resetAvatar,
  saveAvatarSettings
} from "../composables/useAvatarCustomizer";

const isOpen = ref(false);

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};

// Curated preset colors that look amazing in 3D
const shirtPresets = ["#ffffff", "#ff8400", "#34bfff", "#ff5c8a", "#2bd97e", "#ffd23f"];
const pantsPresets = ["#67727c", "#2d2a24", "#052e87", "#e9ded0", "#4f5d2f"];
const hairPresets = ["#2d2a24", "#d4a373", "#ccd5ae", "#e07a5f", "#f4f1de", "#3d348b"];
const skinPresets = ["#f1d5c5", "#e0a98c", "#c68b6c", "#a16b4f", "#ffd8be"];

const selectPreset = (type: "shirt" | "pants" | "hair" | "skin", color: string) => {
  if (type === "shirt") shirtColor.value = color;
  if (type === "pants") pantsColor.value = color;
  if (type === "hair") hairColor.value = color;
  if (type === "skin") skinColor.value = color;
  saveAvatarSettings();
};

const selectExpression = (exp: string) => {
  faceExpression.value = exp;
  saveAvatarSettings();
};

const handleReset = () => {
  resetAvatar();
};
</script>

<template>
  <div class="customizer-wrapper">
    <!-- Floating toggle button -->
    <button
      class="customizer-toggle"
      @click="togglePanel"
      data-cursor="circle-white"
      data-sound="click"
      data-hoversound="hover"
      :aria-label="isOpen ? 'Close Customizer' : 'Open Customizer'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        stroke="currentColor"
        class="customizer-toggle-icon"
        :class="{ 'is-open': isOpen }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.395m3.02 0a15.999 15.999 0 0 1-1.62-3.388m0 0A4.5 4.5 0 0 1 12 3v1.5a3 3 0 0 0-3 3m.396-4.512A4.5 4.5 0 0 1 13.5 6H15a3 3 0 0 0-3-3m.396 9.012a4.5 4.5 0 0 1 1.5 3.388V16.5a3 3 0 0 0-3-3m.396 4.512A4.5 4.5 0 0 1 16.5 18H18a3 3 0 0 0-3-3m.396-9.012A4.5 4.5 0 0 1 18 12.003v1.5a3 3 0 0 0-3-3Z"
        />
      </svg>
    </button>

    <!-- Side panel drawer -->
    <div class="customizer-drawer" :class="{ 'is-open': isOpen }">
      <div class="drawer-header">
        <h3>Tùy chỉnh Avatar</h3>
        <button class="close-btn" @click="togglePanel">&times;</button>
      </div>

      <div class="drawer-content">
        <!-- Shirt Color Selection -->
        <div class="control-group">
          <label>Màu Áo (Shirt)</label>
          <div class="presets">
            <button
              v-for="color in shirtPresets"
              :key="color"
              class="preset-color"
              :style="{ backgroundColor: color }"
              :class="{ 'is-selected': shirtColor === color }"
              @click="selectPreset('shirt', color)"
            ></button>
            <div class="color-picker-wrapper">
              <input type="color" v-model="shirtColor" @change="saveAvatarSettings" class="picker-input" />
              <span class="picker-icon">🎨</span>
            </div>
          </div>
        </div>

        <!-- Pants Color Selection -->
        <div class="control-group">
          <label>Màu Quần (Pants)</label>
          <div class="presets">
            <button
              v-for="color in pantsPresets"
              :key="color"
              class="preset-color"
              :style="{ backgroundColor: color }"
              :class="{ 'is-selected': pantsColor === color }"
              @click="selectPreset('pants', color)"
            ></button>
            <div class="color-picker-wrapper">
              <input type="color" v-model="pantsColor" @change="saveAvatarSettings" class="picker-input" />
              <span class="picker-icon">🎨</span>
            </div>
          </div>
        </div>

        <!-- Hair Color Selection -->
        <div class="control-group">
          <label>Màu Tóc (Hair)</label>
          <div class="presets">
            <button
              v-for="color in hairPresets"
              :key="color"
              class="preset-color"
              :style="{ backgroundColor: color }"
              :class="{ 'is-selected': hairColor === color }"
              @click="selectPreset('hair', color)"
            ></button>
            <div class="color-picker-wrapper">
              <input type="color" v-model="hairColor" @change="saveAvatarSettings" class="picker-input" />
              <span class="picker-icon">🎨</span>
            </div>
          </div>
        </div>

        <!-- Skin Color Selection -->
        <div class="control-group">
          <label>Màu Da (Skin)</label>
          <div class="presets">
            <button
              v-for="color in skinPresets"
              :key="color"
              class="preset-color"
              :style="{ backgroundColor: color }"
              :class="{ 'is-selected': skinColor === color }"
              @click="selectPreset('skin', color)"
            ></button>
            <div class="color-picker-wrapper">
              <input type="color" v-model="skinColor" @change="saveAvatarSettings" class="picker-input" />
              <span class="picker-icon">🎨</span>
            </div>
          </div>
        </div>

        <!-- Expression Selection -->
        <div class="control-group">
          <label>Biểu Cảm (Expression)</label>
          <div class="expression-buttons">
            <button
              class="exp-btn"
              :class="{ 'is-selected': faceExpression === 'auto' }"
              @click="selectExpression('auto')"
            >
              Tự động
            </button>
            <button
              class="exp-btn"
              :class="{ 'is-selected': faceExpression === 'default' }"
              @click="selectExpression('default')"
            >
              Bình thường
            </button>
            <button
              class="exp-btn"
              :class="{ 'is-selected': faceExpression === 'proud' }"
              @click="selectExpression('proud')"
            >
              Vui vẻ
            </button>
            <button
              class="exp-btn"
              :class="{ 'is-selected': faceExpression === 'sleeping' }"
              @click="selectExpression('sleeping')"
            >
              Ngủ gật
            </button>
          </div>
        </div>
      </div>

      <div class="drawer-footer">
        <button class="reset-btn" @click="handleReset">Cài đặt lại</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.customizer-wrapper {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: var(--z-index-header);
  font-family: inherit;
  pointer-events: auto;
}

.customizer-toggle {
  background: var(--color-background-400);
  border: 1px solid var(--color-text-300);
  color: var(--color-text-400);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(8px);

  &:hover {
    transform: scale(1.08);
  }

  &-icon {
    width: 22px;
    height: 22px;
    transition: transform 0.4s ease;

    &.is-open {
      transform: rotate(90deg);
    }
  }
}

.customizer-drawer {
  position: fixed;
  bottom: 80px;
  right: 24px;
  width: 280px;
  max-width: calc(100vw - 48px);
  background: var(--color-background-400);
  border: 1px solid var(--color-text-300);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(20px) scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &.is-open {
    transform: translateY(0) scale(1);
    opacity: 1;
    visibility: visible;
  }
}

.drawer-header {
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;

  html.theme-dark & {
    border-bottom-color: rgba(255, 255, 255, 0.05);
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--color-text-300);
    padding: 0 4px;
    line-height: 1;
  }
}

.drawer-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 380px;
  overflow-y: auto;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-300);
  }
}

.presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.preset-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
  position: relative;

  html.theme-dark & {
    border-color: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    transform: scale(1.15);
  }

  &.is-selected {
    transform: scale(1.15);
    border: 2px solid var(--color-text-400);
  }
}

.color-picker-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px dashed var(--color-text-300);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .picker-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .picker-icon {
    font-size: 11px;
    pointer-events: none;
  }
}

.expression-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.exp-btn {
  background: transparent;
  border: 1px solid var(--color-text-300);
  color: var(--color-text-400);
  padding: 6px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    html.theme-dark & {
      background: rgba(255, 255, 255, 0.03);
    }
  }

  &.is-selected {
    background: var(--color-text-400);
    color: var(--color-background-400);
    border-color: var(--color-text-400);
  }
}

.drawer-footer {
  padding: 12px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-end;

  html.theme-dark & {
    border-top-color: rgba(255, 255, 255, 0.05);
  }

  .reset-btn {
    background: none;
    border: none;
    color: var(--color-text-300);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: var(--color-text-400);
    }
  }
}
</style>
