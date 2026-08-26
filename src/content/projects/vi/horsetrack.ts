import type { ProjectContent } from "../../types";
import horsetrackHero from "../../../assets/images/projects/horsetrack/hero.png";
import horsetrackTrophy from "../../../assets/images/projects/horsetrack/trophy.png";
import horsetrackGlobe from "../../../assets/images/projects/horsetrack/globe.png";
import horseTrackLogo from "../../../assets/images/logos/horsetrack-logo.png";

export default {
  title: "HorseTrack",
  theme: "dark",
  logo: horseTrackLogo,
  tags: ["next", "react", "websockets", "node", "tailwind", "typescript"],
  description:
    "Một hệ thống quản lý giải đua ngựa và bảng điều khiển phân tích thời gian thực với độ trung thực cao, thẩm mỹ khoang lái F1, quy trình làm việc dựa trên vai trò và cập nhật trực tiếp qua WebSockets.",
  live: "https://www.horsetrack.io.vn",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: horsetrackHero,
        alt: "HorseTrack Dashboard",
        caption: "Trung tâm đua trực tiếp HorseTrack - Bảng điều khiển thể thao tốc độ giao diện tối tương phản cao.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tổng quan",
        text: "HorseTrack là một bảng điều khiển phân tích thể thao thời gian thực cao cấp được thiết kế riêng để quản lý và theo dõi các giải đấu đua ngựa. Khác biệt với các phong cách SaaS thông thường, HorseTrack triển khai ngôn ngữ hình ảnh đua xe tối màu gợi nhớ đến khoang lái của Công thức 1. Nền tảng xử lý các cấu trúc vai trò phức tạp, phát sóng tiến trình đua trực tiếp và báo cáo toàn diện của trọng tài.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: horsetrackTrophy,
        alt: "Vai trò và tính năng HorseTrack",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Khả năng cốt lõi",
            items: [
              "<strong>Bảng điều khiển Admin:</strong> Tạo giải đấu trực tiếp, lên lịch đua và phân công trọng tài với sự giám sát toàn diện.",
              "<strong>Trung tâm chủ sở hữu tương tác:</strong> Đăng ký chuồng/ngựa và chỉ định nài ngựa cho các cuộc đua cạnh tranh cụ thể.",
              "<strong>Góc nhìn khán giả trực tiếp:</strong> Xem các cuộc đua trực tiếp với cập nhật vị trí tức thì qua WebSockets và chạy các dự đoán giả lập.",
              "<strong>Kiểm soát trọng tài tối ưu trên máy tính bảng:</strong> Ghi lại thời gian hoàn thành cuộc đua, vi phạm và gửi nhật ký vi phạm thời gian thực trực tiếp từ đường đua.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: horsetrackGlobe,
        alt: "Mạng lưới giải đấu toàn cầu HorseTrack",
        caption: "Mạng lưới giải đấu quốc tế - Kết nối các giải đua hàng đầu trên toàn cầu.",
      },
    },
    {
      type: "text",
      props: {
        title: "Kiến trúc kỹ thuật",
        text: "Ứng dụng được xây dựng trên một kiến trúc tách biệt cao. Frontend sử dụng Next.js 15 (App Router) với React 19, nổi bật với các thành phần glassmorphism tùy chỉnh và bố cục Tailwind tối ưu hóa. Backend được cung cấp bởi NestJS (TypeScript) và MongoDB với Socket.io cho phép truyền phát thông báo thời gian thực. Ứng dụng React Native và Expo đồng bộ hóa trải nghiệm người dùng trên các nền tảng di động.",
      },
    },
  ],
} as const satisfies ProjectContent;
