import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedMovies: [],
  fetchedDetails: {},
  fetchedGenres: [],
  fetchedSimilars: [],
  page: 1,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearBestMovies(state, action) {
      state.fetchedMovies = [];
      state.page = 1;
    },
  },
});

export const { clearBestMovies } = movieSlice.actions;
export default movieSlice.reducer;

/* export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        fetchedMovies: [...state.fetchedMovies, ...action.results],
        page: action.page + 1,
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        fetchedDetails: action.payload,
      };
    case FETCH_GENRES:
      return {
        ...state,
        fetchedGenres: action.payload,
      };
    case FETCH_SIMILARS:
      return {
        ...state,
        fetchedSimilars: action.payload,
      };
    case CLEAR_BEST_MOVIES:
      return {
        ...state,
        fetchedMovies: [],
        page: 1,
      };
    default:
      return state;
  }
}; */
