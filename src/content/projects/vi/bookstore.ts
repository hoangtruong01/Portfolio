import type { ProjectContent } from "../../types";
import bookstore1 from "../../../assets/images/projects/bookstore/bookstore-1.png";
import bookstore2 from "../../../assets/images/projects/bookstore/bookstore-2.png";
import bookstore3 from "../../../assets/images/projects/bookstore/bookstore-3.png";
import bookstore4 from "../../../assets/images/projects/bookstore/bookstore-4.png";

export default {
  title: "Trường Thành Stationery",
  theme: "light",
  tags: ["vue", "flutter", "typescript", "tailwind", "javascript"],
  description:
    "Trường Thành Bookstore & Stationery là ứng dụng web bán lẻ và hệ sinh thái di động hiện đại tại Việt Nam. Được xây dựng bằng Vue 3 cho cổng thông tin web và Flutter cho ứng dụng di động, dự án cung cấp danh mục văn phòng phẩm, sách giáo khoa và thiết bị văn phòng toàn diện với giỏ hàng có trạng thái, quét đơn hàng và tìm kiếm tức thì.",
  live: "https://truong-thanh-bookstore.vercel.app/",
  source: "https://github.com/hoangtruong01/Truong_Thanh_Bookstore",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore1,
        alt: "Trường Thành Stationery Home",
        caption: "Trang chủ - Giao diện sạch sẽ, dễ tiếp cận với tính năng tìm kiếm sản phẩm nhạy bén và các phần quảng cáo.",
      },
    },
    {
      type: "text",
      props: {
        title: "Mục tiêu dự án",
        text: "Thách thức chính của dự án này là thiết kế một trải nghiệm nhà sách thương mại điện tử được tối ưu hóa cao. Người dùng có thể dễ dàng tìm kiếm hàng trăm dụng cụ học tập, sách giáo khoa và thiết bị văn phòng. Để đạt được điều này, giao diện kết hợp các hiệu ứng chuyển động mượt mà, tiêu chuẩn bố cục phản hồi nghiêm ngặt và công cụ tìm kiếm nhanh phía máy khách.",
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: bookstore2,
        alt: "Trang danh mục",
        border: true,
        component: {
          type: "list",
          props: {
            title: "Tính năng & Kiến trúc",
            items: [
              "<strong>Ứng dụng đồng hành Flutter:</strong> Ứng dụng di động đa nền tảng hỗ trợ quét mã vạch sách tức thì và theo dõi trực tiếp đơn hàng.",
              "<strong>Bộ lọc danh mục:</strong> Lọc nhanh phía máy khách theo các danh mục như Sách giáo khoa, Văn phòng phẩm, Đồ chơi và Truyện tranh.",
              "<strong>Giỏ hàng lưu trữ trạng thái:</strong> Giỏ hàng phản ứng được xây dựng với bộ nhớ lưu trữ bền vững, quản lý số lượng và áp dụng mã giảm giá.",
              "<strong>Xác thực liền mạch:</strong> Luồng đăng nhập/đăng ký dựa trên JWT với kiểm tra bảo mật và xác thực biểu mẫu tùy chỉnh.",
            ],
          },
        },
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore3,
        alt: "Trang chi tiết sản phẩm",
        caption: "Chi tiết sản phẩm - Bố cục có cấu trúc với mô tả chi tiết, giảm giá theo số lượng và đánh giá.",
      },
    },
    {
      type: "text",
      props: {
        title: "Phát triển & Tối ưu hóa",
        text: "Được xây dựng bằng Vue 3 (Composition API), Vite, Tailwind CSS và Flutter. Ứng dụng tích hợp cơ chế lưu trữ đệm hiện đại để giữ lại các mặt hàng trong giỏ hàng cục bộ, điều hướng trang nhanh và hình ảnh được tối ưu hóa cao để kết xuất trang nhanh chóng qua các mạng di động tốc độ thấp.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: bookstore4,
        alt: "Trang giỏ hàng lưu trữ trạng thái",
        caption: "Giỏ hàng & Thanh toán - Tích hợp giỏ hàng cục bộ/toàn cầu đồng bộ với trạng thái máy khách.",
      },
    },
  ],
} as const satisfies ProjectContent;
