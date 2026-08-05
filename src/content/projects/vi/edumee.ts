import type { ProjectContent } from "../../types";
import edumeeHero from "../../../assets/images/projects/edumee/edumee-hero.png";
import edumeeFeatures from "../../../assets/images/projects/edumee/edumee_1.png";
import edumeeStudents from "../../../assets/images/projects/edumee/edumee-students.png";

export default {
  title: "Edumee.me",
  theme: "light",
  tags: ["ai", "vue", "tailwind", "typescript"],
  description:
    "Một nền tảng hướng nghiệp được hỗ trợ bởi AI, được thiết kế để giúp học sinh, sinh viên khám phá tính cách, điểm mạnh và lộ trình nghề nghiệp lý tưởng thông qua các đánh giá AI nâng cao và lộ trình học tập được cá nhân hóa.",
  live: "https://edumee.me",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: edumeeHero,
        alt: "Edumee Landing Page",
        caption: "Trang đích Edumee - Một giao diện bóng bẩy, thu hút cho việc khám phá nghề nghiệp.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tầm nhìn",
        text: "Chọn đúng con đường sự nghiệp là một trong những quyết định quan trọng nhất trong cuộc đời học sinh. Edumee thu hẹp khoảng cách giữa việc tự khám phá bản thân và các lựa chọn nghề nghiệp. Bằng cách tận dụng trí tuệ nhân tạo, nó cung cấp cho học sinh một bài đánh giá tính cách kéo dài 5 phút, ánh xạ các đặc điểm độc đáo của họ tới hơn 500 lựa chọn nghề nghiệp tiềm năng với độ chính xác cao.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: edumeeFeatures,
        alt: "Edumee Bento-Grid Features",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Các tính năng chính",
            items: [
              "<strong>Tư vấn thông minh AI:</strong> Phân tích 24 nét tính cách để dự đoán mức độ tương thích với hơn 500 ngành nghề.",
              "<strong>Lộ trình cá nhân hóa:</strong> Tạo ra các hướng dẫn từng bước từ con đường học vấn đến phát triển kỹ năng mềm.",
              "<strong>Mô phỏng nghề nghiệp:</strong> Cung cấp các dự án tương tác được mô phỏng bởi AI để trải nghiệm công việc thực tế.",
              "<strong>Đánh giá chuyên nghiệp 360°:</strong> Cung cấp thông tin chi tiết từ các chuyên gia đang hoạt động trong ngành.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edumeeStudents,
        alt: "Đánh giá từ học sinh",
        caption: "Cảm nhận từ học sinh - Cộng đồng đang phát triển với hơn 10.000+ người học năng động.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tác động & Công nghệ sử dụng",
        text: "Được xây dựng bằng các công nghệ hiện đại như Vue.js, TypeScript và Tailwind CSS ở frontend, kết hợp với các API AI mạnh mẽ để xử lý các nét tính cách và tạo ra lộ trình chi tiết. Hơn 10.000+ học sinh tại Việt Nam đã sử dụng thành công Edumee để định hình hướng đi học tập và nghề nghiệp của mình.",
      },
    },
  ],
} as const satisfies ProjectContent;
