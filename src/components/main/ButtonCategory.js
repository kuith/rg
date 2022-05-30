function ButtonCategory({ category, onClick }) {

  return (
    <button
      type="button"
      className="btn rounded-pill btn-outline-danger mb-2"
      onClick={() =>onClick(category)}
    >
      {category}
    </button>
  );
}

export default ButtonCategory;
