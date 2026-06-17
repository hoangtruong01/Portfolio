import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";

export default [
  {
    title: "Edumee.me",
    slug: "Edumee",
    thumbnail: edumeeThumbnail,
    description: "Eine KI-gestützte Plattform zur Berufsorientierung für Schüler und Studenten.",
  },
  {
    title: "HorseTrack",
    slug: "horsetrack",
    thumbnail: horsetrackThumbnail,
    description: "Ein dunkles Echtzeit-Analysedashboard für Pferderennen.",
  },
] as const satisfies ProjectPreview[];
