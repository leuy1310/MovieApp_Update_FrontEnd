import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMovieDetail } from "../store/actions";
const Pagenations = ["1", "2", "3", "4"];
function MoviesGrid(props) {
  const { handleAddToMyList } = props;
  // Pagenaton
  const [pagenation, setPagenation] = useState("1");

  // List Movies

  const [moviesList, setMoviesList] = useState([]);

  // goi den mang Results trong Obj
  const movies = moviesList.movies;
  console.log(moviesList);
  // Call API
  useEffect(() => {
    const moviesAPI = "http://localhost:8181/movies/type";

    fetch(`${moviesAPI}/page=${pagenation}`)
      .then((response) => response.json())
      .then((movies) => setMoviesList(movies));
  }, [pagenation]);

  const dispatch = useDispatch();
  const handleSetDetailMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };
  return (
    <div className="w-full bg-black text-white pt-24 px-5">
      <div className="w-full grid grid-cols-5 gap-4 ">
        {movies &&
          movies.map((movie, index) => (
            <div
              key={index}
              className="item-my-list relative rounded overflow-hidden"
            >
              <img
                className="w-full h-auto scale-100 rounded"
                src={`${movie.poster_path}`}
                alt=""
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
      <div className="w-full pt-20 flex flex-row justify-center">
        {Pagenations.map((page) => (
          <button
            key={page}
            onClick={() => setPagenation(page)}
            className="w-10 h-10 mx-4 rounded-md flex items-center justify-center"
            style={
              pagenation === page
                ? {
                    backgroundColor: "#e50914",
                  }
                : {
                    backgroundColor: "#202020",
                  }
            }
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoviesGrid;
