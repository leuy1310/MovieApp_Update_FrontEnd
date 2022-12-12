import "./content.style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";

function Content(props) {
  const { movies, title, isNetflix, handleAddToMyList } = props;

  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden bg-black w-full h-full pt-10 pl-5 pr-5 text-white">
      <h1 className="text-lg select-none pb-10">{title}</h1>
      <Slider className="content-slider" {...settings}>
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path !== null) {
              // let imageUrl = isNetflix
              //   ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              //   : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
              return (
                <div
                  className="movie-items relative select-none rounded-md overflow-hidden"
                  key={index}
                >
                  <>
                    <img
                      className="w-full h-auto object-cover rounded-md scale-100 hover:scale-110 hover:z-20"
                      src={movie.poster_path}
                      alt=""
                    />
                    <div className="movie-name absolute left-0 right-0 bottom-0 p-1 text-center ">
                      {movie.name || movie.title}
                    </div>
                    <div className="info-control-btn absolute left-0 right-0 top-2/4 text-center">
                      <button className="btn-control text-xs w-28 p-2 rounded mr-1">
                        <Link
                          to={`${movie.id}`}
                          onClick={() => handleSetMovie(movie)}
                          className=""
                        >
                          Info Movie
                        </Link>
                      </button>
                      <button
                        onClick={() => handleAddToMyList(movie)}
                        className="btn-control text-xs w-28 py-2 rounded ml-1"
                      >
                        Add to My List
                      </button>
                    </div>
                  </>
                </div>
              );
            }
          })}
      </Slider>
    </div>
  );
}

export default Content;
