import ButtonsCategoriesContainer from "./ButtonsCategoriesContainer";
import AlbumContainer from './AlbumContainer';
import Carousel from './Carousel';

function Main({ videoCategories, videosAlbum }) {

  return (
    <main>
      <Carousel />
      <ButtonsCategoriesContainer categories={videoCategories} />
      <AlbumContainer listVideos={videosAlbum}/>
    </main>
  );
}

export default Main;
