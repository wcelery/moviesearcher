import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_MOVIES, API_KEY, FETCH_MOVIES } from "./config";
import { showLoader, hideLoader } from "./actions";

export function* sagaWatcher() {
  /* catch every action that have type REQUEST_MOVIES and apply a function to it*/
  yield takeEvery(REQUEST_MOVIES, sagaWorker);
}

function* sagaWorker() {
  try {
    /* put is analog of dispatch in saga */
    yield put(showLoader());
    /* payload is equal to result of fetchMovies */
    const payload = yield call(fetchMovies);

    yield put({ type: FETCH_MOVIES, payload });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function fetchMovies() {
  const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`);
  const movies = await data.json();
  return await movies.results;
}
