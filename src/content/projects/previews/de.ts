import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";

export default [
  {
    title: "Edumee.me",
    slug: "Edumee",
    thumbnail: edumeeThumbnail,
    description: "Eine KI-gestützte Plattform zur Berufsorientierung für Schüler und Studenten.",
  },
] as const satisfies ProjectPreview[];
