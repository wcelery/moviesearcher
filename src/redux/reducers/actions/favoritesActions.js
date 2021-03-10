import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../config";

export function addToFavorites(movie) {
  const jsonMovie = JSON.stringify(movie);
  localStorage.setItem(movie.id, jsonMovie);

  return { type: ADD_TO_FAVORITES, payload: movie };
}

export function removeFromFavorites(movie) {
  localStorage.removeItem(movie.id);

  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movie.id,
  };
}
