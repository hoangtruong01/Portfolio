import { resources } from "../../../utils/resources";
import { Mesh, Vector3, Euler, Group, ShaderMaterial, LinearSRGBColorSpace, Color } from "three";
import { scene } from "../../core/scene";
import { animations } from "./animations";
import { sceneWeights, sceneWeightsInOut } from "../../../animations/scenes";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { face } from "./face";
import { leftDesktop as avatarLeftDesktop } from "./left-desktop";
import matcapVertexShader from "../../shaders/avatar-matcap/vertex.glsl";
import matcapFragmentShader from "../../shaders/avatar-matcap/fragment.glsl";
import headVertexShader from "../../shaders/avatar-head/vertex.glsl";
import headFragmentShader from "../../shaders/avatar-head/fragment.glsl";
import gsap from "gsap";
import { aboutProgress } from "../../../animations/transitions/about";
import { shirtColor, pantsColor, hairColor, skinColor, shoesColor } from "../../../composables/useAvatarCustomizer";
import { watch } from "vue";
//import { avatarHologram } from "./hologram";

import type { Material, Bone, Texture } from "three";

let mesh: Mesh | null = null;
let rightHandBone: Bone | null = null;
const avatarMaterials = new Map<string, ShaderMaterial>();

const tIdleIntensity = { value: 0 };

const waypointsPosition = new Vector3();
const waypointsRotation = new Euler();
const transform = new Group();
const uniforms = { uProgress: { value: 0 }, uAmbientStrength: { value: 0 } };
const contactPosition = new Vector3(0, -13, 0);
const contactRotation = new Euler(0, -Math.PI, 0);

const init = () => {
  setupMesh();
  animations.init();
  face.init();
  avatarLeftDesktop.init();
  gsap.ticker.add(tick);
};

const updateAvatarColors = () => {
  if (!mesh) return;

  // 1. Shirt (mesh name: "gray")
  const grayMat = avatarMaterials.get("gray");
  if (grayMat) {
    grayMat.uniforms.uColorTint?.value.set(shirtColor.value);
    const grayMesh = mesh.getObjectByName("gray") as Mesh;
    if (grayMesh) {
      grayMesh.userData.matcap = shirtColor.value !== "#808080"
        ? resources.items["matcap-white"]
        : resources.items["matcap-gray"];
    }
  }

  // 2. Pants (mesh name: "black")
  const blackMat = avatarMaterials.get("black");
  if (blackMat) {
    blackMat.uniforms.uColorTint?.value.set(pantsColor.value);
    const blackMesh = mesh.getObjectByName("black") as Mesh;
    if (blackMesh) {
      blackMesh.userData.matcap = pantsColor.value !== "#2d2a24"
        ? resources.items["matcap-white"]
        : resources.items["matcap-black"];
    }
  }

  // 3. Shoes (mesh name: "white")
  const whiteMat = avatarMaterials.get("white");
  if (whiteMat) {
    whiteMat.uniforms.uColorTint?.value.set(shoesColor.value);
    const whiteMesh = mesh.getObjectByName("white") as Mesh;
    if (whiteMesh) {
      whiteMesh.userData.matcap = shoesColor.value !== "#ffffff"
        ? resources.items["matcap-white"]
        : resources.items["matcap-white"];
    }
  }

  // 4. Skin (mesh name: "skin")
  const skinMat = avatarMaterials.get("skin");
  if (skinMat) {
    skinMat.uniforms.uColorTint?.value.set(skinColor.value);
    const skinMesh = mesh.getObjectByName("skin") as Mesh;
    if (skinMesh) {
      skinMesh.userData.matcap = skinColor.value !== "#f1d5c5"
        ? resources.items["matcap-white"]
        : resources.items["matcap-skin"];
    }
  }

  // 5. Hair (mesh name: "head")
  const headMat = avatarMaterials.get("head");
  if (headMat) {
    headMat.uniforms.uHairColorTint?.value.set(hairColor.value);
  }
};

const getMaterial = (name: string): Material | null => {
  if (name === "face") return face.getMaterial();
  if (name === "head") {
    const texture = resources.items["head-texture"];
    texture.flipY = false;
    texture.colorSpace = LinearSRGBColorSpace;
    texture.generateMipmaps = false;
    return new ShaderMaterial({
      vertexShader: headVertexShader,
      fragmentShader: headFragmentShader,
      transparent: true,
      uniforms: {
        uHeadTexture: { value: texture },
        uHairColorTint: { value: new Color(1, 1, 1) },
        ...uniforms,
      },
    });
  }

  const tex = resources.items["matcap-black"];
  tex.colorSpace = LinearSRGBColorSpace;
  tex.generateMipmaps = false;

  return new ShaderMaterial({
    vertexShader: matcapVertexShader,
    fragmentShader: matcapFragmentShader,
    transparent: true,
    uniforms: {
      uMatcap: { value: tex },
      uColorTint: { value: new Color(1, 1, 1) },
      ...uniforms,
    },
  });
};

const assignMatcap = (child: Mesh): boolean => {
  let tex: Texture | null = null;

  if (child.name === "black") {
    tex = resources.items["matcap-black"];
  } else if (child.name === "gray") {
    tex = resources.items["matcap-gray"];
  } else if (child.name === "skin") {
    tex = resources.items["matcap-skin"];
  } else if (child.name === "white") {
    tex = resources.items["matcap-white"];
  }

  if (tex) {
    tex.colorSpace = LinearSRGBColorSpace;
    child.userData.matcap = tex;
    return true;
  }

  return false;
};

const setupMesh = () => {
  if (mesh) return;
  const resource = resources.items["avatar-model"];
  mesh = cloneSkeleton(resource.scene.children[0]) as Mesh;

  mesh.frustumCulled = false;

  mesh.traverse((child) => {
    if (child instanceof Mesh) {
      const mat = getMaterial(child.name);
      if (!mat) return;
      child.material = mat;
      child.frustumCulled = false;
      child.renderOrder = child.name === "face" ? 25 : 24;

      if (mat instanceof ShaderMaterial) {
        avatarMaterials.set(child.name, mat);
      }

      const hasMatcap = assignMatcap(child);
      if (hasMatcap) {
        child.onBeforeRender = () => {
          child.material.uniforms.uMatcap.value = child.userData.matcap;
        };
      }
    }
  });

  const brain = mesh.getObjectByName("brain") as Mesh;
  if (brain) {
    mesh.remove(brain);
  }

  mesh.rotation.z = 0;

  transform.add(mesh);

  rightHandBone = mesh.getObjectByName("bone-right-hand") as Bone;

  scene.instance.add(transform);

  // Setup initial colors and watcher
  const blackMesh = mesh.getObjectByName("black") as Mesh;
  if (blackMesh) {
    blackMesh.geometry.computeBoundingBox();
    console.log("Black mesh bounding box:", blackMesh.geometry.boundingBox);
  }

  updateAvatarColors();
  watch([shirtColor, pantsColor, hairColor, skinColor, shoesColor], updateAvatarColors);
};

const tick = () => {
  animations.update();

  const isContact = sceneWeights.contact > 0.001;

  if (isContact) {
    transform.position.copy(contactPosition);
    transform.rotation.copy(contactRotation);
    uniforms.uProgress.value = 0;
    uniforms.uAmbientStrength.value = 0;
    transform.visible = true;
    return;
  }

  transform.position.copy(waypointsPosition);
  transform.rotation.copy(waypointsRotation);

  //uniforms.uProgress.value = sceneWeightsInOut.about.in * 1.1 - 0.1;
  uniforms.uProgress.value = aboutProgress.value * 1.1 - 0.1;
  uniforms.uAmbientStrength.value = sceneWeightsInOut.about.in;

  if (!mesh) return;
  if (uniforms.uProgress.value > 0.999 && sceneWeights.contact > 0.99) {
    mesh.visible = false;
  } else {
    mesh.visible = true;
  }
};

const destroy = () => {
  //mesh = null;
  //transform.clear();
  face.destroy();
  gsap.ticker.remove(tick);
};

export const avatar = {
  init,
  destroy,
  getMesh: () => mesh,
  getRightHandBone: () => rightHandBone,
  tIdleIntensity,
  waypointsPosition,
  waypointsRotation,
  uniforms,
  transform,
};
