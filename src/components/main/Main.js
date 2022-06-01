import ButtonsCategoriesContainer from "./ButtonsCategoriesContainer";
import AlbumContainer from './AlbumContainer';
import Carousel from './Carousel';

function Main({
  videoCategories,
  videosAlbum,
  onClick,
  onclickAll,
}) {
  return (
    <main>
      <Carousel />
      <ButtonsCategoriesContainer
        categories={videoCategories}
        onClick={onClick}
       />
      <AlbumContainer listVideos={videosAlbum} />
    </main>
  );
}

export default Main;
