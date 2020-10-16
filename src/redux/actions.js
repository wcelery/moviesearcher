import { REQUEST_MOVIES, SHOW_LOADER, HIDE_LOADER } from "./config";

export const fetchMovies = () => {
  return { type: REQUEST_MOVIES };
};

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}
