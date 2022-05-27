import { useState } from "react";

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


function App() {
  const [videos, setVideos] = useState(getVideos);

  return (
    <>
      <Header
        logo={getChanelLogo}
        flipped={getFlippedButton}
        about={getAboutButton}
        drops={getHeaderGrades}
      />
      <Main videoCategories={getVideoCategories} videosAlbum={videos} />
      <Footer data={getDataFooter} />
    </>
  );
}

export default App;
