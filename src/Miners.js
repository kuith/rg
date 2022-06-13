const videosByGrade = (data, grade) => {
  const videosTotal = getVideos(data);
  const videosResult = videosTotal.filter(
    (video) => video.cefrGrade === grade || video.cambridgeGrade === grade
  );
  return videosResult;
};

const videosByCategory = (data, cat, videos) => {
  const videosTotal = getVideos(data);

  if (cat === "All videos") {
    return videosTotal;
  }

  const videosPorCat = videos.filter((video) => video.categories.includes(cat));
  return videosPorCat;
};

const videosByKeyWord = (data, keyWord) => {
  const videosTotal = getVideos(data);
  
  const videosPorKeyWord = videosTotal.filter((video) =>
    video.keyWords.includes(keyWord)
  );
  return videosPorKeyWord;
};

const showKeyWord = (data, query) => {
  if (data) {
    let sortedKeyWords = getKeyWords(data).sort();
    let matches = sortedKeyWords.filter((word) => {
      const regex = new RegExp(`${query}`, "gi");
      return word.match(regex);
    });
    console.log(matches);
    return matches;
  } else return;
};

const getDataFooter = (data) => data.footer;
const getVideoCategories = (data) => data.videoCategories;
const getVideos = (data) => data.videos;
const getChanelLogo = (data) => data.chanelLogo;
const getFlippedButton = (data) => data.flippedButton;
const getAboutButton = (data) => data.aboutButton;
const getHeaderGrades = (data) => data.headerGrades;
const getKeyWords = (data) => data.keyWords;

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
  videosByKeyWord,
  showKeyWord,
  getKeyWords,
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
      "keyWords": ["uno", "dos", "tres", "cuatro", "cinco"],
    }, 
    */
