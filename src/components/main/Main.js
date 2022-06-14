import ButtonsCategoriesContainer from "./ButtonsCategoriesContainer";
import AlbumContainer from './AlbumContainer';
import Carousel from './Carousel';

function Main({
  videoCategories,
  videosAlbum,
  onClick,
  category
}) {
  console.log("del main" , category)
  return (
    <main>
      <Carousel />
      <ButtonsCategoriesContainer
        categories={videoCategories || []}
        onClick={onClick}
       />
      <AlbumContainer listVideos={videosAlbum || []} category={category}/>
    </main>
  );
}

export default Main;
