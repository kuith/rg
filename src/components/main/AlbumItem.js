function AlbumItem({ video, category }) {
  const videoPageData = {
    cefrGrade: video.cefrGrade,
    cambridgeGrade: video.cambridgeGrade,
    videoCategory: category,
    videoTitulo: video.videoDescription,
    videoUrl: video.urlVideo,
  };
    console.log("del albumItem", videoPageData.videoCategory)
  const goTovideoPage = () => {
    window.open(
      `videoPage.html?cefrGrade=${videoPageData.cefrGrade}&cambridgeGrade=${videoPageData.cambridgeGrade}&videoCategory=${videoPageData.videoCategory}&videoTitulo=${videoPageData.videoTitulo}&videoUrl=${videoPageData.videoUrl}`
    );
  };
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={video.urlThumbail}
              alt={video.alt}
              width="100%"
              height="auto"
              // href={video.urlVideo}
              // href="%PUBLIC_URL%/videoPage.html"
              onClick={goTovideoPage}
            />
            <div className="card-body">
              <p className="card-text">
                <a
                  href="#"
                  //href="process.env.PUBLIC_URL/videoPage.html"
                  onClick={goTovideoPage}
                  className="stretched-link"
                  data-bs-toggle="tooltip"
                  title="Comparative Adjectives"
                >
                  {video.videoDescription}
                </a>
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
