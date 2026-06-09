import { ref } from "vue";

export const shirtColor = ref(localStorage.getItem("avatar-shirt-color") || "#ffffff");
export const pantsColor = ref(localStorage.getItem("avatar-pants-color") || "#808080");
export const hairColor = ref(localStorage.getItem("avatar-hair-color") || "#2d2a24");
export const skinColor = ref(localStorage.getItem("avatar-skin-color") || "#f1d5c5");
export const faceExpression = ref<string>(localStorage.getItem("avatar-face-expression") || "auto");

export const resetAvatar = () => {
  shirtColor.value = "#ffffff";
  pantsColor.value = "#808080";
  hairColor.value = "#2d2a24";
  skinColor.value = "#f1d5c5";
  faceExpression.value = "auto";
  saveAvatarSettings();
};

export const saveAvatarSettings = () => {
  localStorage.setItem("avatar-shirt-color", shirtColor.value);
  localStorage.setItem("avatar-pants-color", pantsColor.value);
  localStorage.setItem("avatar-hair-color", hairColor.value);
  localStorage.setItem("avatar-skin-color", skinColor.value);
  localStorage.setItem("avatar-face-expression", faceExpression.value);
};
