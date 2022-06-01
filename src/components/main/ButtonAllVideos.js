function ButtonAllVideos({ onclick }) {
  return (
    <button
      type="button"
      className="btn rounded-pill btn-danger mb-2"
      onClick={() => onclick("All videos")}
    >
      All videos
    </button>
  );
}

export default ButtonAllVideos;
