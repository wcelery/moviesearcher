import { FETCH_SEARCH, REQUEST_SEARCH } from "../config";

const initialState = {
  query: "",
  fetchedSearch: [],
  page: 1,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        fetchedSearch: [...state.fetchedSearch, ...action.results],
        query: action.query,
        page: action.page,
      };
    case "test":
      return {
        ...state,
        fetchedSearch: [],
        page: state.page + 1,
      };
    default:
      return state;
  }
};
