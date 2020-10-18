import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from "./config";

const initialState = {
  fetchedMovies: [],
  fetchedDetails: {},
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
    default:
      return state;
  }
};
