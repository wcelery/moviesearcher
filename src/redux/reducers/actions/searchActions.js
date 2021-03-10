import { CLEAR_SEARCHED_MOVIES, FETCH_SEARCH } from "../../config";

export function fetchSearch(query, isScrolling, results, page) {
  return {
    type: FETCH_SEARCH,
    query,
    isScrolling,
    results,
    page,
  };
}

export function clearSearchedMovies() {
  return { type: CLEAR_SEARCHED_MOVIES };
}
