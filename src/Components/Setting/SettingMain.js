import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./setting.style.css";
import {
  getComedyMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../store/actions";
import Setting from "./Setting";
import AddMovie from "./AddMovie";

function SettingMain(props) {
  const dispatch = useDispatch();

  const { PopularMovies, TopRatedMovies, TrendingMovies, ComdedyMovies } =
    useSelector((state) => state.infoMovies);

  //popular movie
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  // Top Rated Movies
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  // Trending movies

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  // Comedy Movie
  useEffect(() => {
    dispatch(getComedyMovies());
  }, [dispatch]);

  const [changeTab, setChangeTab] = useState(1);

  const clickTab = (index) => {
    setChangeTab(index);
  };

  const [showMethod, setShowMethod] = useState(false);

  const handleShowMethod = () => {
    setShowMethod(!showMethod);
  };

  return (
    <div className="bg-black w-full pt-24 relative">
      <div className="flex flex-row pl-5">
        <nav className="flex flex-row">
          <button
            className={
              changeTab === 1
                ? "bg-red-600 p-4 text-white"
                : "tabs p-4 text-white"
            }
            onClick={() => clickTab(1)}
          >
            Popular Movies
          </button>
          <button
            className={
              changeTab === 2
                ? "bg-red-600 p-4 text-white"
                : "tabs p-4 text-white"
            }
            onClick={() => clickTab(2)}
          >
            Top Rated Movies
          </button>
          <button
            className={
              changeTab === 3
                ? "bg-red-600 p-4 text-white"
                : "tabs p-4 text-white"
            }
            onClick={() => clickTab(3)}
          >
            Trending Movies
          </button>
          <button
            className={
              changeTab === 4
                ? "bg-red-600 p-4 text-white"
                : "tabs p-4 text-white"
            }
            onClick={() => clickTab(4)}
          >
            Comedy Movies
          </button>
          <button
            onClick={handleShowMethod}
            className="bg-blue-600 p-4 text-white"
          >
            Add Movie
          </button>
        </nav>
      </div>
      <div>
        <div className={changeTab === 1 ? "block" : "hidden"}>
          <Setting movies={PopularMovies} />
        </div>
        <div className={changeTab === 2 ? "block" : "hidden"}>
          <Setting movies={TopRatedMovies} />
        </div>
        <div className={changeTab === 3 ? "block" : "hidden"}>
          <Setting movies={TrendingMovies} />
        </div>
        <div className={changeTab === 4 ? "block" : "hidden"}>
          <Setting movies={ComdedyMovies} />
        </div>
      </div>
      {showMethod ? <AddMovie handleShowMethod={handleShowMethod} /> : ""}
    </div>
  );
}

export default SettingMain;
