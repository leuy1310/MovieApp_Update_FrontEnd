import React, { useEffect } from "react";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import {
  getComedyMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../store/actions";

function ContentMain({ handleAddToMyList }) {
  const dispatch = useDispatch();
  const { PopularMovies, TopRatedMovies, TrendingMovies, ComdedyMovies } =
    useSelector((state) => state.infoMovies);

  // Popular Movies
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  // Top Rated Movies

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  // Netflix top rated
  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  // get Netflix Comdy Movies
  useEffect(() => {
    dispatch(getComedyMovies());
  }, [dispatch]);

  return (
    <div>
      <Content
        movies={PopularMovies}
        title="Popular Movies"
        isNetflix={true}
        handleAddToMyList={handleAddToMyList}
      />
      <Content
        movies={TopRatedMovies}
        handleAddToMyList={handleAddToMyList}
        isNetflix={true}
        title="Top Rated Movies"
      />
      <Content
        movies={TrendingMovies}
        isNetflix={true}
        handleAddToMyList={handleAddToMyList}
        title="Trending Movies"
      />
      <Content
        movies={ComdedyMovies}
        isNetflix={true}
        handleAddToMyList={handleAddToMyList}
        title="Comedy Movies"
      />
    </div>
  );
}

export default ContentMain;
