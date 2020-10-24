import { REQUEST_SEARCH } from "../config";

const initialState = {
  query: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return {
        state,
        query: action.payload,
      };
    default:
      return state;
  }
};
