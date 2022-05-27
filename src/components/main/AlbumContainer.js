import AlbumItem from './AlbumItem';

function AlbumContainer({ listVideos }) {
  const videosAlbum = listVideos.map((item) => (
    <AlbumItem video={item} key={item.title} />
  ));
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
          {videosAlbum}
        </div>
      </div>
    </div>
  );
}

export default AlbumContainer;
