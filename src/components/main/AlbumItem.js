function AlbumItem({ video, category }) {
  const videoPageData = {
    cefrGrade: video.cefrGrade,
    cambridgeGrade: video.cambridgeGrade,
    videoCategory: category,
    videoTitulo: video.videoDescription,
    videoUrl: video.urlVideo,
  };
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
              onClick={goTovideoPage}
            />
            <div className="card-body">
              <p className="card-text">
                <a
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
