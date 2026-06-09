#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uHeadTexture;
uniform vec2 uHeadTextureSize;
uniform vec3 uHairColorTint;

varying vec2 vUv;

void main() {
    vec4 tex = texture2D(uHeadTexture, vUv);

    // Segment hair vs skin. Hair on the head texture is darker (R < 0.75, G < 0.62)
    // Skin (face, ears, neck) has R > 0.8. We exclude the black background (R, G < 0.02)
    bool isHair = (tex.r < 0.75 && tex.g < 0.62 && tex.b < 0.55 && (tex.r > 0.02 || tex.g > 0.02));

    if (isHair) {
        float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
        // Normalize and scale luma so that colors are vibrant but retain shadow details
        luma = clamp(luma * 1.6, 0.0, 1.0);
        tex.rgb = luma * uHairColorTint;
    }

    float progress = getProgress();

    gl_FragColor = vec4(applyAmbient(tex.rgb), progress);
}