import {
  REQUEST_MOVIES,
  REQUEST_MOVIE_DETAILS,
  REQUEST_SEARCH,
  /*RESET_ERROR_FETCH,*/
} from "./config";

export const requestMovies = () => {
  return { type: REQUEST_MOVIES };
};

export const fetchMovieDetails = (id) => {
  return { type: REQUEST_MOVIE_DETAILS, id };
};

/*someday i'll figure out, how to reset the error properly, but for now user must reload the page*/

/* export function resetError() {   
  return { type: RESET_ERROR_FETCH };
} */

export const requestSearch = (query, isScrolling) => {
  return { type: REQUEST_SEARCH, query, isScrolling };
};
