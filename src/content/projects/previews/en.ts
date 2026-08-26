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
    description: "A comprehensive real estate marketplace and PropTech platform.",
  },
  {
    title: "Trường Thành Stationery",
    slug: "bookstore",
    thumbnail: bookstoreThumbnail,
    logo: truongThanhLogo,
    description: "A fully featured retail e-commerce bookstore and stationery platform.",
  },
  {
    title: "HorseTrack",
    slug: "horsetrack",
    thumbnail: horsetrackThumbnail,
    logo: horseTrackLogo,
    description: "A dark-themed real-time horse racing analytics dashboard.",
  },
  {
    title: "Edumee.me",
    slug: "edumee",
    thumbnail: edumeeThumbnail,
    logo: edumeeLogo,
    description: "An AI-powered career orientation platform for students.",
  },
] as const satisfies ProjectPreview[];
