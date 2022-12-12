import "./setting.style.css";

import { MdDelete } from "react-icons/md";
import { MdAutoFixHigh } from "react-icons/md";
import { useNavigate } from "react-router";
import { deleteMovie } from "../store/actions";
import { useState } from "react";
import UpdateMovie from "./UpdateMovie";
function Setting(props) {
  const navigate = useNavigate();
  const { movies, handleShowMethod } = props;

  const [moviesList, setMoviesList] = useState(movies);
  // delete

  const deleteMovieById = async (id) => {
    await deleteMovie(id);
    var newMovies = moviesList.filter((movie) => {
      return movie.id !== id;
    });

    setMoviesList(newMovies);
  };

  const [showUpdate, setShowUpdate] = useState(false);

  const handleShowUpdate = () => {
    setShowUpdate(!showUpdate);
  };
  return (
    <div className="w-full bg-black text-white pb-10 px-5">
      <div className="w-full">
        <ul style={{ backgroundColor: "#202020" }} className="w-full pb-4">
          {moviesList &&
            moviesList.length > 0 &&
            moviesList.map((movie) => (
              <li
                key={movie.id}
                className="w-full flex items-center px-2 py-4 cursor-pointer hover:bg-black"
              >
                <div className="w-10 h-10 flex">
                  <img className="w-full h-auto" src={movie.poster_path} />
                </div>
                <div className="pl-3 w-[calc(100%-2.5rem)] flex justify-between">
                  <div>
                    <h1 className="flex flex-col text-xl">{movie.name}</h1>
                  </div>
                  <div className="flex pr-4">
                    <button
                      onClick={handleShowUpdate}
                      className="btn w-10 h-10 bg-blue-500 flex items-center justify-center rounded relative"
                    >
                      <MdAutoFixHigh className="text-2xl" />
                      <span className="span absolute p-2 bg-black text-white rounded z-20 ">
                        Update
                      </span>
                    </button>
                    <button
                      onClick={() => deleteMovieById(movie.id)}
                      className="btn w-10 h-10 bg-red-600 text-black flex items-center justify-center rounded relative ml-3"
                    >
                      <MdDelete className="text-2xl" />
                      <span className="span absolute p-2 bg-black text-white rounded z-20">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {showUpdate ? <UpdateMovie handleShowUpdate={handleShowUpdate} /> : ""}
    </div>
  );
}

export default Setting;
