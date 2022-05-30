import ButtonCategory from "./ButtonCategory";
import ButtonAllVideos from "./ButtonAllVideos";

function ButtonsCategoriesContainer({ categories, onClick }) {
  const buttons = categories.map((item) => (
    <ButtonCategory
      category={item.category}
      onClick={onClick}
      key={item.category}
    />
  ));

  return (
    <div className="tagcloud mb-5">
      <div className="container text-center">
        <h2 className="h4 mb-4">Filter by category:</h2>
        <ButtonAllVideos />
        {buttons}
      </div>
    </div>
  );
}

export default ButtonsCategoriesContainer;
