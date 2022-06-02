import {
  getDataFooter,
  getVideoCategories,
  getVideos,
  getChanelLogo,
  getFlippedButton,
  getAboutButton,
  getCfr,
  getHeaderGrades,
} from "./data";

const videosByGrade = (grade) => {
  const videosTotal = getVideos;
  const videosResult = videosTotal.filter(
    (video) => (video.cfrGrade === grade) | (video.cambridgeGrade === grade)
  );
  return videosResult;
};

const videosByCategory = (cat) => {
  const videosTotal = getVideos;

  if (cat === "All videos") {
    return videosTotal;
  }

  const videosPorCat = videosTotal.filter(
    (video) => (video.category.includes(cat))
  )
  return videosPorCat
  
};

export {
  videosByGrade,
  videosByCategory
}

/* {
      title: "Titulo 1",
      videoText: "VideoText 1",
      videoDescription: "Description 1",
      url: "/assets/videos/",
      video: "video1.mp4",
      cfrGrade: "A1",
      cambridgeGrade: "Starters",
      category: ["adjetives", "Gerund", "Present Perfect"],
    }, 
    */
