export interface TimelineMilestone {
  id: string;
  year: string;
  side: "left" | "right"; // 'right' = card on right, year on left; 'left' = card on left, year on right
  title: {
    en: string;
    vi: string;
  };
  role?: {
    en: string;
    vi: string;
  };
  company?: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  hasStar?: boolean;
  underlineStyle?: "wavy" | "brush" | "simple";
}

export const milestones: TimelineMilestone[] = [
  {
    id: "2026-final-year",
    year: "2026",
    side: "right",
    title: {
      en: "Final-year IT",
      vi: "Sinh viên năm cuối CNTT",
    },
    description: {
      en: "Final-year IT student at FPT University. Ready for what's next!",
      vi: "Sinh viên năm cuối ngành CNTT tại Đại học FPT. Sẵn sàng cho những chặng đường tiếp theo!",
    },
    hasStar: true,
    underlineStyle: "simple",
  },
  {
    id: "2025-edumee",
    year: "2025",
    side: "left",
    title: {
      en: "Edumee.me",
      vi: "Edumee.me",
    },
    role: {
      en: "Founder & Full-stack Developer",
      vi: "Founder & Full-stack Developer",
    },
    description: {
      en: "AI Career Orientation Platform",
      vi: "Nền tảng định hướng nghề nghiệp tích hợp AI",
    },
    underlineStyle: "wavy",
  },
  {
    id: "2025-ihouzz",
    year: "2025",
    side: "right",
    title: {
      en: "IHouzz.com",
      vi: "IHouzz.com",
    },
    role: {
      en: "Frontend Developer",
      vi: "Frontend Developer",
    },
    company: {
      en: "@ BLUEMARQ GROUP",
      vi: "@ BLUEMARQ GROUP",
    },
    description: {
      en: "Building responsive real estate web solutions & UI.",
      vi: "Xây dựng các giải pháp web bất động sản & UI tối ưu.",
    },
    underlineStyle: "brush",
  },
  {
    id: "2023-started-it",
    year: "2023",
    side: "left",
    title: {
      en: "Started IT",
      vi: "Bắt đầu CNTT",
    },
    description: {
      en: "Began my IT journey @ FPT University",
      vi: "Bắt đầu hành trình học tập CNTT tại Đại học FPT",
    },
    underlineStyle: "simple",
  },
];
