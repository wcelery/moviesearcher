import { searchReducer } from "../searchReducer";
import { fetchSearch, clearSearchedMovies } from "../actions/searchActions";

let state;

beforeEach(() => {
  state = {
    query: "",
    fetchedSearch: [],
    page: 1,
    scroll_page: 2,
  };
});

const mockedSearch = {
  query: "sample query",
  isScrolling: true,
  results: [{ movie: 42 }, { movie: 99 }],
  page: 1,
};

const { query, isScrolling, results, page } = mockedSearch;

it("should store searched movies on scroll, but this test is always passing, no matter what", () => {
  const newState = searchReducer(
    state,
    fetchSearch(query, isScrolling, results, page)
  );
  expect(newState).toEqual({
    ...state,
    query: "sample query",
    fetchedSearch: [...state.fetchedSearch, ...mockedSearch.results],
    page: 1,
    scroll_page: page + 1,
  });
});
