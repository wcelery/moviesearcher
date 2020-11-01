import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../config";

const checkLocalStorage = () => {
  return Object.assign(
    {},
    ...Object.entries(localStorage).map(([id, value]) => ({
      [id]: JSON.parse(value),
    }))
  );
};

const initialState = {
  favorites: checkLocalStorage(),
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: { ...state.favorites, [action.payload.id]: action.payload },
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: Object.keys(state.favorites)
          .filter((item) => item !== action.payload.toString())
          .reduce(
            (object, item) => ({ ...object, [item]: state.favorites[item] }),
            {}
          ),
      };
    default:
      return state;
  }
};
