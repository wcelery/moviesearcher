import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  REQUEST_MOVIES,
  API_KEY,
  REQUEST_MOVIE_DETAILS,
  REQUEST_SEARCH,
} from "./config";
import { showLoader, hideLoader } from "./reducers/actions/appActions";
import {
  actionFetchMovieDetails,
  actionFetchMovies,
  fetchGenres,
  fetchSimilars,
  clearBestMovies,
} from "./reducers/actions/movieActions";
import * as selector from "./selectors";
import { fetchError, receiveTotalPages } from "./reducers/actions/appActions";
import {
  fetchSearch,
  clearSearchedMovies,
} from "./reducers/actions/searchActions";

export function* sagaWatcher() {
  /* catch every action that have type REQUEST_MOVIES, etc and apply a function to it*/
  yield takeEvery(REQUEST_MOVIES, fetchMoviesWorker);
  yield takeEvery(REQUEST_MOVIE_DETAILS, fetchMovieDetailsWorker);
  yield takeEvery(REQUEST_SEARCH, fetchSearchWorker);
}

function* fetchMoviesWorker() {
  try {
    const page = yield select(selector.page);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
    `;
    const payload = yield call(fetchMovies, url);
    yield put(clearSearchedMovies());
    yield put(actionFetchMovies(payload.results, payload.page));
    yield put(receiveTotalPages(payload.total_pages));
  } catch (e) {
    yield put(fetchError());
    /*  console.log(e); */
  }
}

function* fetchSearchWorker({ query = "", isScrolling }) {
  try {
    if (query) {
      let page;
      const search_page = yield select(selector.search_page);
      const scroll_page = yield select(selector.scroll_page);
      isScrolling ? (page = scroll_page) : (page = search_page);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
      const payload = yield call(fetchMovies, url);
      yield put(clearBestMovies());
      yield put(fetchSearch(query, isScrolling, payload.results, payload.page));
      yield put(receiveTotalPages(payload.total_pages));
    }
  } catch (e) {
    yield put(fetchError());
  }
}

function* fetchMovieDetailsWorker({ id }) {
  try {
    yield put(showLoader());

    const details = yield call(fetchMovieDetails, id);

    yield put(actionFetchMovieDetails(details));
    yield put(fetchGenres(details.genres));

    const genreIds = details.genres.map((genre) => genre.id);
    const similars = yield call(fetchMovieSimilars, genreIds);

    yield put(fetchSimilars(similars));

    yield put(hideLoader());
  } catch (e) {
    yield put(fetchError());
  }
}

async function fetchMovies(url) {
  const data = await fetch(url);
  const movies = await data.json();
  return await movies;
}

async function fetchMovieDetails(id) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const details = await data.json();
  return await details;
}

async function fetchMovieSimilars(genreIds) {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreIds}&include_adult=false&include_video=false&page=1`
  );
  const similars = await data.json();
  similars.results.length = 14; //14 similar movie cards looks nice
  return await similars.results;
}
