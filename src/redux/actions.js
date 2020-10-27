import {
  REQUEST_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  REQUEST_MOVIE_DETAILS,
  REQUEST_SEARCH,
  CLEAR_SEARCHED_MOVIES,
  CLEAR_BEST_MOVIES,
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

export const requestSearch = (query, isScrolling) => {
  return { type: REQUEST_SEARCH, query, isScrolling };
};

export function clearSearchedMovies() {
  return { type: CLEAR_SEARCHED_MOVIES };
}

export function clearBestMovies() {
  return { type: CLEAR_BEST_MOVIES };
}
