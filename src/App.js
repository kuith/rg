import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import {
  getDataFooter,
  getVideoCategories,
  getVideos,
  getChanelLogo,
  getFlippedButton,
  getAboutButton,
  getHeaderGrades,
} from "./data";

import { videosByGrade, videosByCategory } from './Miners';


function App() {
  
  
  const [inicialVideos, setInicialVideos] = useState(getVideos);
  const [videos, setVideos] = useState(inicialVideos);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  
  const onClickGrade = (grade) => {
    setSelectedGrade(grade);
  };
  const onClickVideoCategory = (cat) => {
    setSelectedCategory(cat);
     //console.log("categoria:", cat);
  };

  useEffect(() => {
    //console.log("Grade seleccionado", selectedGrade);
    setVideos(videosByGrade(selectedGrade));
  }, [selectedGrade]);

  useEffect(() => {
    //console.log("Grade seleccionado", selectedGrade);
    setVideos(videosByCategory(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    //console.log("la categoria que pasao al hook", selectedCategory);
    setVideos(inicialVideos);
    //console.log("Le mando estos videos:", inicialVideos);
  }, [inicialVideos]);
  
  return (
    <>
      <Header
        logo={getChanelLogo}
        flipped={getFlippedButton}
        about={getAboutButton}
        drops={getHeaderGrades}
        onClick={onClickGrade}
      />
      <Main
        videoCategories={getVideoCategories}
        videosAlbum={videos}
        onClick={onClickVideoCategory}
      />
      <Footer data={getDataFooter} />
    </>
  );
}

export default App;
