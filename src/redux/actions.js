import {
  REQUEST_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  REQUEST_MOVIE_DETAILS,
  REQUEST_SEARCH,
  CLEAR_SEARCHED_MOVIES,
  CLEAR_BEST_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  /*RESET_ERROR_FETCH,*/
} from "./config";

export const requestMovies = () => {
  return { type: REQUEST_MOVIES };
};

export const fetchMovieDetails = (id) => {
  return { type: REQUEST_MOVIE_DETAILS, id };
};

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

/*someday i'll figure out, how to reset the error properly, but for now user must reload the page*/

/* export function resetError() {   
  return { type: RESET_ERROR_FETCH };
} */

export const requestSearch = (query, isScrolling) => {
  return { type: REQUEST_SEARCH, query, isScrolling };
};

export function clearSearchedMovies() {
  return { type: CLEAR_SEARCHED_MOVIES };
}

export function clearBestMovies() {
  return { type: CLEAR_BEST_MOVIES };
}

export function addToFavorites(movie) {
  const jsonMovie = JSON.stringify(movie);
  localStorage.setItem(movie.id, jsonMovie);

  return { type: ADD_TO_FAVORITES, payload: movie };
}

export const removeFromFavorites = (movie) => {
  localStorage.removeItem(movie.id);

  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movie.id,
  };
};
