import * as Types from "../types";

const reducerMoviesInitialState = {
  PopularMovies: null,
  TopRatedMovies: null,
  TrendingMovies: null,
  ComdedyMovies: null,
  NetflixNowPlayings: null,
  SearchMovie: null,
  MovieDetail: null,
};

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_POPULAR_MOVIES:
      return { ...state, PopularMovies: payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types.GET_TOP_RATED_MOVIES:
      return { ...state, TopRatedMovies: payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComdedyMovies: payload };
    case Types.GET_NOW_PLAYINGS:
      return { ...state, NetflixNowPlayings: payload };
    case Types.GET_SEARCH_MOVIE:
      return { ...state, SearchMovie: payload };
    default:
      return state;
  }
};

export default reducerMovies;
