import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";
import ihouzzThumbnail from "../../../assets/thumbnails/ihouzz.png";

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
  {
    title: "iHouzz.com",
    slug: "ihouzz",
    thumbnail: ihouzzThumbnail,
    description: "Ein umfassender Immobilienmarktplatz und eine PropTech-Plattform.",
  },
] as const satisfies ProjectPreview[];
