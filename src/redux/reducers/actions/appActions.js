import {
  SHOW_LOADER,
  HIDE_LOADER,
  FETCH_ERROR,
  RECEIVE_TOTAL_PAGES,
} from "../../config";

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function fetchError() {
  return { type: FETCH_ERROR };
}

export function receiveTotalPages(payload) {
  return { type: RECEIVE_TOTAL_PAGES, payload };
}
