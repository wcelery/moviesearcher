import {
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  FETCH_GENRES,
  FETCH_SIMILARS,
  CLEAR_BEST_MOVIES,
} from "../../config";

export function actionFetchMovies(results, page) {
  return {
    type: FETCH_MOVIES,
    results,
    page,
  };
}

export function actionFetchMovieDetails(details) {
  return { type: FETCH_MOVIE_DETAILS, payload: details };
}

export function fetchGenres(genres) {
  return { type: FETCH_GENRES, payload: genres };
}

export function fetchSimilars(similars) {
  return { type: FETCH_SIMILARS, payload: similars };
}

export function clearBestMovies() {
  return { type: CLEAR_BEST_MOVIES };
}
