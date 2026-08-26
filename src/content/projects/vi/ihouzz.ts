import type { ProjectContent } from "../../types";
import ihouzz1 from "../../../assets/images/projects/ihouzz/ihouzz-1.png";
import ihouzz2 from "../../../assets/images/projects/ihouzz/ihouzz-2.png";
import ihouzz3 from "../../../assets/images/projects/ihouzz/ihouzz-3.png";
import ihouzz4 from "../../../assets/images/projects/ihouzz/ihouzz-4.png";
import ihouzzLogo from "../../../assets/images/logos/ihouzz-logo.png";

export default {
  title: "iHouzz.com",
  theme: "light",
  logo: ihouzzLogo,
  tags: ["vue", "typescript", "nuxt", "tailwind", "maps"],
  description:
    "Một nền tảng PropTech hàng đầu tại Việt Nam, cung cấp thị trường bất động sản toàn diện. Với tư cách là Lập trình viên Front-end, tôi đã xây dựng và tối ưu hóa giao diện người dùng, tìm kiếm bản đồ tương tác và quy trình đăng tin để mang lại trải nghiệm duyệt bất động sản liền mạch.",
  live: "https://ihouzz.com",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz1,
        alt: "iHouzz Portal Hero",
        caption: "Cổng thông tin & Trang đích iHouzz - Được thiết kế để tối ưu hóa tốc độ và khả năng tìm kiếm.",
      },
    },
    {
      type: "text",
      props: {
        title: "Kiến trúc Front-end",
        text: "Xây dựng một cổng thông tin bất động sản có lưu lượng truy cập cao đòi hỏi sự tập trung vào SEO, hiệu suất và thiết kế phản hồi. Chúng tôi đã sử dụng Nuxt.js/Vue.js để xử lý Server-Side Rendering (SSR) cho các trang tin đăng bất động sản, giúp thời gian tải tức thì và khả năng lập chỉ mục hoàn hảo bởi các công cụ tìm kiếm. Hệ thống quản lý trạng thái đã được tối ưu hóa để xử lý mượt mà hàng ngàn tin đăng bất động sản theo thời gian thực.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: ihouzz2,
        alt: "Hệ sinh thái iHouzz",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Đóng góp chính",
            items: [
              "<strong>Tìm kiếm bản đồ tương tác:</strong> Tích hợp Google Maps và Mapbox API với các nhóm điểm đánh dấu (marker clusterers) tùy chỉnh để duyệt bất động sản theo địa lý trong thời gian thực.",
              "<strong>Bộ lọc tìm kiếm nâng cao:</strong> Thiết kế hệ thống lọc tìm kiếm lưu trạng thái (giá, vị trí, loại bất động sản, tiện ích) đồng bộ hóa với URL để có thể chia sẻ truy vấn.",
              "<strong>Tối ưu hóa SEO & SSR:</strong> Cấu trúc dữ liệu có cấu trúc (schema markup) và thẻ meta động cho các tin đăng bất động sản, giúp tăng lưu lượng truy cập tìm kiếm tự nhiên.",
              "<strong>Giao diện Responsive & Pixel-Perfect:</strong> Triển khai các bố cục linh hoạt bằng Tailwind CSS bám sát thiết kế Figma UI/UX nghiêm ngặt.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz3,
        alt: "Bảng giải pháp iHouzz",
        caption: "Giải pháp tích hợp iHouzz - Một hệ sinh thái thống nhất kết nối người mua, người bán và môi giới.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tác động & Công nghệ",
        text: "Sử dụng Nuxt.js, Vue 3, Composition API, TypeScript và Pinia để quản lý trạng thái mạnh mẽ. Bằng cách tối ưu hóa các chỉ số kỹ thuật cốt lõi của trang web (cải thiện LCP và FID) và triển khai tải ảnh lười (lazy loading), nền tảng đã đạt điểm số Google PageSpeed cao, thúc đẩy giữ chân người dùng tốt hơn và giao dịch bất động sản thành công.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ihouzz4,
        alt: "Đối tác & Ý kiến khách hàng iHouzz",
        caption: "Đối tác chiến lược & Ý kiến khách hàng iHouzz - Được tin cậy bởi các thương hiệu bất động sản hàng đầu.",
      },
    },
  ],
} as const satisfies ProjectContent;
