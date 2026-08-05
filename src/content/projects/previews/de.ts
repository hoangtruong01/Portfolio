import type { ProjectPreview } from "../../types";
import edumeeThumbnail from "../../../assets/thumbnails/edumee.png";
import horsetrackThumbnail from "../../../assets/thumbnails/horsetrack.png";
import ihouzzThumbnail from "../../../assets/thumbnails/ihouzz.png";
import bookstoreThumbnail from "../../../assets/thumbnails/bookstore.png";

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
  {
    title: "Trường Thành Stationery",
    slug: "bookstore",
    thumbnail: bookstoreThumbnail,
    description: "Ein voll ausgestatteter E-Commerce-Buchladen und eine Schreibwarenplattform.",
  },
] as const satisfies ProjectPreview[];
