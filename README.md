# Portfolio — Trương Hoàng

> Website portfolio cá nhân — giới thiệu bản thân, showcase dự án, 3D interactive & shader effects.

[![Deploy to GitHub Pages](https://github.com/hoangtruong01/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/hoangtruong01/Portfolio/actions/workflows/deploy.yml)

## 🔗 Live Demo

👉 **[https://hoangtruong01.github.io/Portfolio/](https://hoangtruong01.github.io/Portfolio/)**

## ✨ Tính năng

- 🎨 Giao diện hiện đại, animation mượt mà (GSAP + Lenis smooth scroll)
- 🌐 Hỗ trợ song ngữ Anh / Đức (i18n)
- 🧊 3D WebGL interactive & GLSL shader effects (Three.js)
- 🔊 Hiệu ứng âm thanh (Howler.js)
- 📱 Responsive trên mọi thiết bị
- ⚡ Build nhanh với Vite, type-safe với TypeScript

## 🛠️ Tech Stack

| Category     | Technologies                            |
| ------------ | --------------------------------------- |
| Framework    | Vue 3 (`<script setup>`)               |
| Language     | TypeScript                              |
| Build Tool   | Vite 7                                  |
| Styling      | SCSS + Mixins                           |
| Animation    | GSAP, Lenis                             |
| 3D / WebGL   | Three.js, GLSL (vite-plugin-glsl)       |
| Audio        | Howler.js                               |
| Deploy       | GitHub Pages (GitHub Actions CI/CD)     |

## 🚀 Getting Started

### Yêu cầu

- Node.js >= 18
- npm >= 9

### Cài đặt & Chạy local

```bash
# Clone repository
git clone https://github.com/hoangtruong01/Portfolio.git
cd Portfolio

# Cài đặt dependencies
npm install

# Tạo file .env từ template
cp .env.example .env

# Chạy dev server (port 3000)
npm run dev
```

### Scripts

| Command              | Mô tả                                      |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Dev server tại `localhost:3000`              |
| `npm run build`      | Type-check + bundle production vào `dist/`   |
| `npm run preview`    | Preview bản build production trên máy local  |
| `npm run typecheck`  | Chỉ kiểm tra type (`vue-tsc -b`)            |

## 🌍 Deploy lên GitHub Pages

Dự án đã được cấu hình **tự động deploy** qua GitHub Actions.

### Thiết lập (chỉ làm 1 lần)

1. Vào **Settings → Pages** trên GitHub repository
2. Mục **Source**: chọn **GitHub Actions** (không phải "Deploy from a branch")
3. Push code lên nhánh `main` — workflow sẽ tự động build & deploy

### Quy trình tự động

```
git push origin main
  → GitHub Actions trigger
    → npm ci → npm run build
      → Upload dist/ → Deploy to GitHub Pages ✅
```

## ⚙️ Cấu hình cá nhân

Cập nhật các file sau trước khi deploy:

| File                                           | Nội dung cần sửa                                        |
| ---------------------------------------------- | ------------------------------------------------------- |
| `src/content/social.ts`                        | Email, GitHub, LinkedIn, X                               |
| `index.html`                                   | `og:url`, `og:image`, meta description                   |
| `public/legal.html`, `public/privacy.html`     | Email và tên miền                                        |
| `public/de/legal.html`, `public/de/privacy.html` | Bản tiếng Đức tương ứng                               |
| `src/i18n/messages/namespaces/common/`         | Tagline, giới thiệu, vị trí địa lý                      |

> 💡 Ẩn credit template gốc trong footer: đặt `VITE_SHOW_ATTRIBUTION=false` trong `.env`.

## 📁 Cấu trúc dự án

```
portfolio/
├── .github/workflows/   # CI/CD deploy config
├── public/              # Static assets (fonts, meta, legal pages)
├── sounds/              # Sound effects
├── src/
│   ├── animations/      # GSAP animation logic
│   ├── assets/          # Styles (SCSS), images
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables
│   ├── content/         # Projects, social links data
│   ├── features/        # Feature modules
│   ├── i18n/            # Internationalization (EN / DE)
│   ├── three/           # WebGL / GLSL shaders
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.vue          # Root component
│   └── main.ts          # Entry point
├── index.html           # HTML entry
├── vite.config.ts       # Vite configuration
└── package.json
```

## ➕ Thêm project mới

1. Tạo file `src/content/projects/{en,de}/<slug>.ts` — nội dung, tags, media, links
2. Thêm slug vào `projectIds` trong `src/content/projects/index.ts`
3. Thêm preview trong `src/content/projects/previews/{en,de}.ts`
4. *(Tuỳ chọn)* Thêm theme màu trong `src/assets/styles/projects.scss` với class `.project-<slug>`

## 📄 License

Xem file [license.md](./license.md) để biết chi tiết.
