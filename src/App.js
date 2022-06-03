import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import { DataManager } from "./data-manager";

import { Selectors } from "./Miners";

function App() {
  const [data, setData] = useState();
  const [videos, setVideos] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  //const [keyWordSearch, setKeyWordSearch] = [];

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await DataManager.loadData();
      setData(initialData);
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    if (data) {
      const selectedVideos = Selectors.videosByGrade(data, selectedGrade);
      setVideos(selectedVideos);
    }
  }, [selectedGrade]);

  useEffect(() => {
    if (data) {
      setVideos(Selectors.videosByCategory(data, selectedCategory));
    }
  }, [selectedCategory]);

  if (data === undefined) {
    return <h3>Loading</h3>;
  }

  const onClickGrade = (grade) => {
    setSelectedGrade(grade);
    console.log("setSelectedGrade", grade);
  };
  const onClickVideoCategory = (cat) => {
    setSelectedCategory(cat);
    //console.log("categoria:", cat);
  };
  /* const HandleChange = (e) => {
    setKeyWordSearch(e.target.value);
    console.log(e.target.value);
  }; */

  return (
    <>
      <Header
        logo={Selectors.getChanelLogo(data)}
        flipped={Selectors.getFlippedButton(data)}
        about={Selectors.getAboutButton(data)}
        drops={Selectors.getHeaderGrades(data)}
        onClick={onClickGrade}
        //searchKeyWords={HandleChange}
      />
      <Main
        videoCategories={Selectors.getVideoCategories(data)}
        videosAlbum={videos || []}
        onClick={onClickVideoCategory}
      />
      <Footer data={Selectors.getDataFooter(data)} />
    </>
  );
}

export default App;
