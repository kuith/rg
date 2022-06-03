const videosByGrade = (data, grade) => {
  const videosTotal = getVideos(data);
  const videosResult = videosTotal.filter(
    (video) => (video.cfrGrade === grade) || (video.cambridgeGrade === grade)
  );
  return videosResult;
};

const videosByCategory = (data, cat) => {
  const videosTotal = getVideos(data);

  if (cat === "All videos") {
    return videosTotal;
  }

  const videosPorCat = videosTotal.filter((video) =>
    video.categories.includes(cat)
  );
  return videosPorCat
  
};

 const getDataFooter = (data) => data.footer;
 const getVideoCategories = (data) => data.videoCategories;
 const getVideos = (data) => data.videos;
 const getChanelLogo = (data) => data.chanelLogo;
 const getFlippedButton = (data) => data.flippedButton;
 const getAboutButton = (data) => data.aboutButton;
 const getHeaderGrades = (data) => data.headerGrades;

export const Selectors = {
  getAboutButton,
  getChanelLogo,
  getDataFooter,
  getFlippedButton,
  getHeaderGrades,
  getVideos,
  getVideoCategories,
  videosByGrade,
  videosByCategory,
};

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
