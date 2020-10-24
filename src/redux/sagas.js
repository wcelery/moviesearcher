import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  REQUEST_MOVIES,
  API_KEY,
  FETCH_MOVIES,
  REQUEST_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS,
  FETCH_GENRES,
  FETCH_SIMILARS,
  FETCH_SEARCH,
} from "./config";
import { showLoader, hideLoader } from "./actions";
import * as selector from "./selectors";

export function* sagaWatcher() {
  /* catch every action that have type REQUEST_MOVIES and apply a function to it*/
  yield takeEvery(REQUEST_MOVIES, fetchMoviesWorkertest);
  yield takeEvery(REQUEST_MOVIE_DETAILS, fetchMovieDetailsWorker);
}

function* fetchMoviesWorker({ query = "" }) {
  try {
    /* put is analog of dispatch in saga */
    if (query) yield put(showLoader());
    /* payload is equal to result of fetchMovies */
    let page = yield select(selector.page);
    let url =
      query === ""
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
    `
        : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const payload = yield call(fetchMovies, url);

    yield put({
      type: FETCH_MOVIES,
      results: payload.results,
      page: payload.page + 1,
    });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

function* fetchMoviesWorkertest({ query = "" }) {
  try {
    let url;

    /* put is analog of dispatch in saga */
    if (query) {
      let search_page = yield select(selector.search_page);
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${search_page}`;
      const payload = yield call(fetchMovies, url);
      yield put({
        type: FETCH_SEARCH,
        results: payload.results,
        search_page: payload.page + 1,
      });
    } else {
      let page = yield select(selector.page);
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
    `;
      const payload = yield call(fetchMovies, url);
      yield put({
        type: FETCH_MOVIES,
        results: payload.results,
        page: payload.page + 1,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

function* fetchMovieDetailsWorker({ id }) {
  try {
    yield put(showLoader());
    const details = yield call(fetchMovieDetails, id);
    yield put({ type: FETCH_MOVIE_DETAILS, payload: details });
    yield put({ type: FETCH_GENRES, payload: details.genres });
    const genreIds = details.genres.map((genre) => genre.id);
    const similars = yield call(fetchMovieSimilars, genreIds);
    yield put({ type: FETCH_SIMILARS, payload: similars });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
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
