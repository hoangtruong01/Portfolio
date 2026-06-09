#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uHeadTexture;
uniform vec2 uHeadTextureSize;
uniform vec3 uHairColorTint;

varying vec2 vUv;

void main() {
    vec4 tex = texture2D(uHeadTexture, vUv);

    // Segment hair vs skin. Hair on the head texture is darker: R < 0.48, G < 0.42, B < 0.38
    bool isHair = (tex.r < 0.48 && tex.g < 0.42 && tex.b < 0.38);

    if (isHair) {
        float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
        luma = clamp(luma * 1.5, 0.0, 1.0);
        tex.rgb = luma * uHairColorTint;
    }

    float progress = getProgress();

    gl_FragColor = vec4(applyAmbient(tex.rgb), progress);
}