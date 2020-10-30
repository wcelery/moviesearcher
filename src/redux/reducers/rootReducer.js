import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { movieReducer } from "./movieReducer";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  app: appReducer,
  search: searchReducer,
  favoriteStore: favoritesReducer,
});
