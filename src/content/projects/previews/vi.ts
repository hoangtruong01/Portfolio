import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";
import ihouzzThumbnail from "../../../assets/thumbnails/ihouzz.png";
import bookstoreThumbnail from "../../../assets/thumbnails/bookstore.png";

import ihouzzLogo from "../../../assets/images/logos/ihouzz-logo.png";
import truongThanhLogo from "../../../assets/images/logos/truong-thanh-logo.png";
import horseTrackLogo from "../../../assets/images/logos/horsetrack-logo.png";
import edumeeLogo from "../../../assets/images/logos/edumee-logo.png";

export default [
  {
    title: "iHouzz.com",
    slug: "ihouzz",
    thumbnail: ihouzzThumbnail,
    logo: ihouzzLogo,
    description: "Nền tảng công nghệ bất động sản (PropTech) và sàn giao dịch toàn diện.",
  },
  {
    title: "Trường Thành Stationery",
    slug: "bookstore",
    thumbnail: bookstoreThumbnail,
    logo: truongThanhLogo,
    description: "Hệ thống thương mại điện tử nhà sách, văn phòng phẩm toàn diện và ứng dụng Flutter.",
  },
  {
    title: "HorseTrack",
    slug: "horsetrack",
    thumbnail: horsetrackThumbnail,
    logo: horseTrackLogo,
    description: "Bảng điều khiển phân tích số liệu và theo dõi đua ngựa thời gian thực giao diện Dark Mode.",
  },
  {
    title: "Edumee.me",
    slug: "edumee",
    thumbnail: edumeeThumbnail,
    logo: edumeeLogo,
    description: "Nền tảng định hướng nghề nghiệp thông minh ứng dụng AI cho học sinh, sinh viên.",
  },
] as const satisfies ProjectPreview[];
