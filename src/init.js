import {
  getDataFooter,
  getVideoCategories,
  getVideos,
  getChanelLogo,
  getFlippedButton,
  getAboutButton,
  getHeaderGrades,
} from "./data";



const initHeader = [
  "logo={getChanelLogo}",
  "flipped={getFlippedButton}",
  "about={getAboutButton}",
  "drops={getHeaderGrades}"
]

export { initHeader };
