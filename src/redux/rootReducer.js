import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { movieReducer } from "./movieReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  app: appReducer,
});
