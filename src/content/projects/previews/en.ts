import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";

export default [
  {
    title: "Edumee.me",
    slug: "edumee",
    thumbnail: edumeeThumbnail,
    description: "An AI-powered career orientation platform for students.",
  },
] as const satisfies ProjectPreview[];
