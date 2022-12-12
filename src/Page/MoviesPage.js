import MoviesGrid from "../Components/Movies/MoviesGrid";
import MoviesSlider from "../Components/Movies/MoviesSlider";

function MoviesPage(props) {
  const { handleAddToMyList } = props;
  return (
    <div>
      <MoviesSlider />
      <MoviesGrid handleAddToMyList={handleAddToMyList} />
    </div>
  );
}

export default MoviesPage;
