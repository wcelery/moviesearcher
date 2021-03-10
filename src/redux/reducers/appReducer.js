import {
  FETCH_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  RECEIVE_TOTAL_PAGES,
  /* RESET_ERROR_FETCH, */
} from "../config";

const initialState = {
  loading: false,
  totalPages: 0,
  isError: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case FETCH_ERROR:
      return { ...state, isError: true };
    /* case RESET_FETCH_ERROR:
      return { ...state, isError: false }; */
    case RECEIVE_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
};
