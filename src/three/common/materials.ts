import { MeshBasicMaterial, ShaderMaterial, Color } from "three";
import { resources } from "../../utils/resources";
import shadowVertexShader from "../shaders/shadow-catcher/vertex.glsl";
import shadowFragmentShader from "../shaders/shadow-catcher/fragment.glsl";
import { isDark } from "../../composables/useTheme";
import { watch } from "vue";

import type { Material } from "three";

let roomMaterial: Material | null = null;
let contactMaterial: Material | null = null;
let shadowMaterial: ShaderMaterial | null = null;

const updateMaterialColors = () => {
  const dimColor = new Color("#66665c");
  const brightColor = new Color("#ffffff");

  if (roomMaterial instanceof MeshBasicMaterial) {
    roomMaterial.color.copy(isDark.value ? dimColor : brightColor);
  }
  if (contactMaterial instanceof MeshBasicMaterial) {
    contactMaterial.color.copy(isDark.value ? dimColor : brightColor);
  }
};

let watcherSetup = false;
const setupThemeWatcher = () => {
  if (watcherSetup) return;
  watcherSetup = true;
  watch(isDark, updateMaterialColors, { immediate: true });
};

export const getRoomMaterial = (): Material => {
  if (roomMaterial) return roomMaterial;
  const texture = resources.items["room-texture"];
  texture.flipY = false;

  roomMaterial = new MeshBasicMaterial({ map: texture });
  setupThemeWatcher();
  updateMaterialColors();

  return roomMaterial;
};

export const getContactMaterial = (): Material => {
  if (contactMaterial) return contactMaterial;
  const texture = resources.items["contact-texture"];
  texture.flipY = false;

  contactMaterial = new MeshBasicMaterial({ map: texture });
  setupThemeWatcher();
  updateMaterialColors();

  return contactMaterial;
};

export const getShadowMaterial = (): ShaderMaterial => {
  if (shadowMaterial) return shadowMaterial;

  shadowMaterial = new ShaderMaterial({
    vertexShader: shadowVertexShader,
    fragmentShader: shadowFragmentShader,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      uTexture: { value: null },
      uColorBackground: { value: null },
      uColorShadow: { value: null },
    },
  });

  return shadowMaterial;
};
