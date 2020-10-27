import { CLEAR_SEARCHED_MOVIES, FETCH_SEARCH } from "../config";

const initialState = {
  query: "",
  fetchedSearch: [],
  page: 1,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      if (action.isScrolling) {
        return {
          ...state,
          fetchedSearch: [...state.fetchedSearch, ...action.results],
          query: action.query,
          page: action.page,
        };
      } else {
        return {
          ...state,
          fetchedSearch: action.results,
          query: action.query,
          page: 1,
        };
      }
    case CLEAR_SEARCHED_MOVIES:
      return {
        ...state,
        fetchedSearch: [],

        query: "",
      };
    default:
      return state;
  }
};
