import { HIDE_LOADER, RECEIVE_TOTAL_PAGES, SHOW_LOADER } from "../config";

const initialState = {
  loading: false,
  totalPages: 0,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case RECEIVE_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
};
