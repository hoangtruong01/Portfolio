# Portfolio — Trương Hoàng

Website portfolio cá nhân: giới thiệu bản thân, showcase dự án, demo 3D nhẹ và shader. Hỗ trợ song ngữ Anh / Đức.

Xây dựng với **Vue 3**, **TypeScript**, **Vite**. Animation bằng **GSAP** và **Lenis**, 3D bằng **three.js**, âm thanh bằng **Howler**. GLSL được biên dịch qua **vite-plugin-glsl**.

## Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server cổng **3000** (`strictPort`)       |
| `npm run build`   | `vue-tsc` rồi bundle production vào `dist/`     |
| `npm run preview` | Chạy bản build production trên máy local      |
| `npm run typecheck` | Chỉ kiểm tra type (`vue-tsc -b`)            |

## Cấu hình cá nhân

Cập nhật các file sau trước khi deploy:

| File | Nội dung cần sửa |
| ---- | ---------------- |
| `src/content/social.ts` | Email, GitHub, LinkedIn, X |
| `index.html` | `canonical`, `og:url`, `og:image`, mô tả meta |
| `public/legal.html`, `public/privacy.html` | Email và tên miền |
| `public/de/legal.html`, `public/de/privacy.html` | Bản tiếng Đức tương ứng |
| `src/i18n/messages/namespaces/common/` | Tagline, giới thiệu, vị trí (`germany` → `vietnam`) |

Ẩn dòng credit template gốc trong footer: đặt `VITE_SHOW_ATTRIBUTION=false` trong `.env`.

## Thêm project mới

1. Tạo `src/content/projects/{en,de}/<slug>.ts` — copy, tags, media, links.
2. Thêm slug vào `projectIds` trong `src/content/projects/index.ts`.
3. Thêm preview trong `src/content/projects/previews/{en,de}.ts`.
4. (Tuỳ chọn) Thêm theme màu trong `src/assets/styles/projects.scss` với class `.project-<slug>`.

## Stack

- Vue 3 (`<script setup>`), SCSS + mixins (`src/assets/styles/`)
- i18n trong `src/i18n/`
- WebGL / GLSL trong `src/three/`

