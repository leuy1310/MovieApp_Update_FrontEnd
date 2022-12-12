import "../MyList/mylist.style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
import gif from "../../image/please.gif";
import { useState } from "react";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyList(props) {
  const { myList, setMyList } = props;

  const [itemList, setItemList] = useState(10);

  const loadMore = () => {
    setItemList(itemList + itemList);
  };

  const toastMessage = () => {
    toast.success("Đã xóa khỏi My List", {
      className: "",
      draggable: false,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const movies = myList.slice(0, itemList);
  const handleRemove = (id) => {
    const newList = myList.filter((movie) => movie.id !== id);
    toastMessage();
    setMyList(newList);
  };

  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  return (
    <div className="w-full bg-black text-white pt-24 px-5">
      <h1 className="text-xl select-none pb-5">My List</h1>
      {movies.length > 0 ? (
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
                  alt="image"
                />
                <div className="movie-name absolute left-0 right-0 bottom-0 p-1 text-center ">
                  {movie.name || movie.title}
                </div>
                <div className="absolute control-btn left-0 right-0 top-2/4 text-center">
                  <button className="btn-control text-xs w-20 p-1 rounded mr-1">
                    <Link
                      to={`${movie.id}`}
                      onClick={() => handleSetMovie(movie)}
                      className=""
                    >
                      Info Movie
                    </Link>
                  </button>
                  <button
                    onClick={() => handleRemove(movie.id)}
                    className="btn-control text-xs w-20 p-1 rounded ml-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="h-full pb-20">
          <h1 className="w-full text-2xl text-center select-none uppercase">
            Please add movie to my list!
          </h1>
          <div className="text-center pb-20">
            <img className="block mx-auto rounded select-none" src={gif} />
          </div>
        </div>
      )}
      {movies.length >= 10 ? (
        <div className="w-full text-center pt-20">
          <button
            className="btn-color w-80 text-center h-10 rounded-md"
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
    </div>
  );
}

export default MyList;
