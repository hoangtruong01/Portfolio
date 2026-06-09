import { resources } from "../../../utils/resources";
import { room } from ".";
import { getShadowMaterial } from "../../common/materials";
import { colors } from "../../common/colors";
import { Color } from "three";
import { isDark } from "../../../composables/useTheme";

import type { Object3D } from "three";

const shadowColor = new Color("rgb(215, 194, 169)");

const init = () => {
  initObjects();
};

const initObjects = () => {
  const resource = resources.items["room-model"];
  const texture = resources.items["room-shadow-texture"];
  texture.flipY = false;

  const mesh = resource.scene.children.find((child: Object3D) => child.name === "shadow-catcher");
  if (!mesh) return;

  mesh.material = getShadowMaterial();
  mesh.onBeforeRender = () => {
    mesh.material.uniforms.uTexture.value = texture;
    
    const bg = isDark.value
      ? new Color("#12110e").convertLinearToSRGB()
      : colors.beigeLight.clone().convertLinearToSRGB();
    const sc = isDark.value
      ? new Color("#060505")
      : shadowColor;

    mesh.material.uniforms.uColorBackground.value = bg;
    mesh.material.uniforms.uColorShadow.value = sc;
  };

  mesh.renderOrder = -1000;

  room.group.add(mesh);
};

const destroy = () => {};

export const shadow = { init, destroy };
