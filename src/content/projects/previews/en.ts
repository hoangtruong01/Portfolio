import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";

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
] as const satisfies ProjectPreview[];
