import {
  FETCH_GENRES,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  FETCH_SIMILARS,
} from "./config";

const initialState = {
  fetchedMovies: [],
  fetchedDetails: {},
  fetchedGenres: [],
  fetchedSimilars: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        fetchedMovies: action.payload,
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        fetchedDetails: action.payload,
      };
    case FETCH_GENRES:
      return {
        ...state,
        fetchedGenres: action.payload,
      };
    case FETCH_SIMILARS:
      return {
        ...state,
        fetchedSimilars: action.payload,
      };
    default:
      return state;
  }
};
