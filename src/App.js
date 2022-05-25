import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import { getDataFooter } from './data';
import { getVideoCategories } from './data';
import { getVideos } from './data';

function App() {
  return (
    <>
      <Header />
      <Main videoCategories={getVideoCategories} videosAlbum={getVideos}/>
      <Footer data={getDataFooter}/>
    </>
  );
}

export default App;
