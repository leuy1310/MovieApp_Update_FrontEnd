import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import gif from "../../image/sad.gif";
import { getSearchMovie, setMovieDetail } from "../store/actions";

const useQuery = () => new URLSearchParams(useLocation().search);

function Search(props) {
  const { handleAddToMyList } = props;
  const dispatch = useDispatch();
  const { SearchMovie } = useSelector((state) => state.infoMovies);

  const handleSetDetailMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const keyword = useQuery().get("keyword");

  useEffect(() => {
    if (keyword) dispatch(getSearchMovie(keyword));
  }, [dispatch, keyword]);
  console.log(useLocation().search);
  console.log(SearchMovie);

  return (
    <div className="w-full bg-black text-white pt-24 px-5">
      <h1 className="text-xl select-none pb-5">Kết quả tìm kiếm:</h1>
      {SearchMovie && SearchMovie.length > 0 ? (
        <div className="w-full grid grid-cols-5 gap-4 ">
          {SearchMovie &&
            SearchMovie.map((movie, index) => (
              <div
                key={index}
                className="item-my-list relative rounded overflow-hidden"
              >
                <img
                  className="w-full h-auto scale-100 rounded"
                  src={`${movie.poster_path}`}
                  alt="image"
                />
                <div className="movie-name absolute left-0 right-0 bottom-0 p-1 text-center ">
                  {movie.name || movie.title}
                </div>
                <div className="absolute control-btn left-0 right-0 top-2/4 text-center">
                  <button className="btn-control text-xs w-22 px-3 py-1 rounded mr-1">
                    <Link
                      to={`${movie.id}`}
                      onClick={() => handleSetDetailMovie(movie)}
                      className=""
                    >
                      Info Movie
                    </Link>
                  </button>
                  <button
                    className="btn-control text-xs w-22 p-1 rounded ml-1"
                    onClick={() => handleAddToMyList(movie)}
                  >
                    Add to My List
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="h-full pb-20">
          <h1 className="w-full text-2xl text-center select-none uppercase">
            Huhu! Không tìm thấy phim rồi...
          </h1>
          <div className="text-center pb-20">
            <img className="block mx-auto rounded select-none" src={gif} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
