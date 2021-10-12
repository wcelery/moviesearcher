import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import movieReducer from "./movieReducer";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from "./favoritesReducer";
import { movieApi } from "../../api/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieReducer,
    app: appReducer,
    search: searchReducer,
    favoriteStore: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
