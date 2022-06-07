const videosByGrade = (data, grade) => {
  const videosTotal = getVideos(data);
  const videosResult = videosTotal.filter(
    (video) => video.cfrGrade === grade || video.cambridgeGrade === grade
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
    let matches = sortedKeyWords.filter((word) =>
    {
      const regex = new RegExp(`${query}`, "gi");
      return word.match(regex)
    }
    )
    console.log(matches);
    return matches;

  } else return
  
 
  
};

/* const showKeyWord = (data) => {
  let sortedKeys = getKeyWords(data).sort();
  let input = document.getElementById("input");

  input.addEventListener("keyup", (e) => {
    for (let i of sortedKeys) {
      if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== "") {
        //creo la lista
        let listItem = document.createElement("li");
        listItem.classList.add("list-items");
        listItem.style.cursor = "pinter";
        listItem.setAttribute("onClick", "displayNames('" + i + "')");
        //la parte que coincide en negrita
        let word = "<b>" + i.substr(0, input.value.length) + "<b>";
        word += i.substr(input.value.length);
        //enseñando el valor
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  }
  )}; */
  
/* function displayNames(input, value) {
  input.value = value;
  } */
/* const showKeyWord = (data, keyWord, e) => {
    const videosTotal = getVideos(data);
    let keyWordOk = "";
    const keyWordResult = videosTotal.filter((video) =>
      video.keyWords.find((word) => word === keyWord)
    );

    if (keyWordResult.length !== 0) {
      keyWordOk = keyWord;
    }
    console.log(keyWordOk);
    //e.target.value = "lo encontre";
    return keyWordOk;
  }; */

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
