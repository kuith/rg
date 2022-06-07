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
  const [userkeyWord, setUserKeyWord] = useState("");
  
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

  useEffect(() => {
    Selectors.showKeyWord(data, userkeyWord);
  }, [userkeyWord]);

  if (data === undefined) {
    return <h3>Loading</h3>;
  }

  const onClickGrade = (grade) => {
    setSelectedGrade(grade);
  };
  const onClickVideoCategory = (cat) => {
    setSelectedCategory(cat);
  };

  const HandleChangeForm = (e) => {
    const inputValue = e.target.value;
    setUserKeyWord(inputValue);

  };

  return (
    <>
      <Header
        logo={Selectors.getChanelLogo(data)}
        flipped={Selectors.getFlippedButton(data)}
        about={Selectors.getAboutButton(data)}
        drops={Selectors.getHeaderGrades(data)}
        onClick={onClickGrade}
        onChangeForm={HandleChangeForm}
        inputValue={userkeyWord}
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
