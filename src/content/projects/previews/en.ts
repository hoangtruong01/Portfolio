import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";
import ihouzzThumbnail from "../../../assets/thumbnails/ihouzz.png";

export default [
  {
    title: "Edumee.me",
    slug: "edumee",
    thumbnail: edumeeThumbnail,
    description: "An AI-powered career orientation platform for students.",
  },
  {
    title: "HorseTrack",
    slug: "horsetrack",
    thumbnail: horsetrackThumbnail,
    description: "A dark-themed real-time horse racing analytics dashboard.",
  },
  {
    title: "iHouzz.com",
    slug: "ihouzz",
    thumbnail: ihouzzThumbnail,
    description: "A comprehensive real estate marketplace and PropTech platform.",
  },
] as const satisfies ProjectPreview[];
