import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import movieReducer from "./movieReducer";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = configureStore({
  reducer: {
    movies: movieReducer,
    app: appReducer,
    search: searchReducer,
    favoriteStore: favoritesReducer,
  },
});
