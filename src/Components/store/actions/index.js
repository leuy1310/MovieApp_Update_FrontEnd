import axios from "axios";
import * as Types from "../types";

const API_KEY = "2adfa99338cf9ab6d2cbde485b3a52de";
const BASE_URL = "https://api.themoviedb.org/3";

const API_URL = "http://localhost:8181/movies";

//get popular movies

export const getPopularMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/type/page=1`);
    dispatch({
      type: Types.GET_POPULAR_MOVIES,
      payload: result.data.movies,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// get trending movies

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/type/page=2`);
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.movies,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// get trending movies

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/type/page=3`);
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.movies,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// get Comedy movies

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/type/page=4`);
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.movies,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// Now playing slider

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://localhost:8181/movies/slider`
    );
    dispatch({
      type: Types.GET_NOW_PLAYINGS,
      payload: result.data,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

// search movie
// const searchMovieAPI = "http://localhost:8181/movies/search_movie";
export const getSearchMovie = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${API_URL}/search_movie/?keyword=${keywords}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIE, payload: result.data });
  } catch (error) {
    console.log("Error", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

// delete movie
export const deleteMovie = (id) => {
  return axios.delete(`${API_URL}/delete_movie/${id}`);
};
