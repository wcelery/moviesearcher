import {
  REQUEST_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  REQUEST_MOVIE_DETAILS,
} from "./config";

export const fetchMovies = () => {
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
