function AlbumItem({video}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>{video.title}</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {video.title}
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">
            <a href={video.url} className="stretched-link">
              {video.videoDescription}
            </a>
          </p>
          <div className="d-flex justify-content-between align-items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
