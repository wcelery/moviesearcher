import { movieReducer } from "../movieReducer";
import {
  clearBestMovies,
  actionFetchMovies,
  actionFetchMovieDetails,
} from "../actions/movieActions";

let state;

let page = 1;

beforeEach(() => {
  state = {
    fetchedMovies: [{ movie: 41 }, { movie: 82 }],
    fetchedDetails: {},
    page,
  };
});

const mockedMovies = [{ movie: 36 }, { movie: 69 }];

const mockedDetails = {
  adult: false,
  title: "Star Wars",
  length: 120,
};

it("it should fetch the movies and then clear the movies", () => {
  const stateWithMovies = movieReducer(
    state,
    actionFetchMovies(mockedMovies, page)
  );
  expect(stateWithMovies).toEqual({
    ...state,
    fetchedMovies: [...state.fetchedMovies, ...mockedMovies],
    page: page + 1,
  });
  const stateWithoutMovies = movieReducer(stateWithMovies, clearBestMovies());
  expect(stateWithoutMovies.fetchedMovies).toEqual([]);
});

it("should properly store details in reducer ", () => {
  const newState = movieReducer(state, actionFetchMovieDetails(mockedDetails));
  expect(newState).toEqual({
    ...state,
    fetchedDetails: {
      adult: false,
      title: "Star Wars",
      length: 120,
    },
  });
});
