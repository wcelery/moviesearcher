import {
  hideLoader,
  showLoader,
  fetchError,
  receiveTotalPages,
} from "../actions/appActions";
import { appReducer } from "../appReducer";
import { appReducerRequest } from "./__mocks__/appReducerRequest";

let state;

jest.mock("./__mocks__/appReducerRequest");

beforeEach(() => {
  state = {
    loading: false,
    totalPages: 0,
    isError: false,
  };
});

describe("should set loading to true/false", () => {
  it("should set loading to true", () => {
    const newState = appReducer(state, showLoader());
    expect(newState.loading).toBeTruthy();
  });

  it("should set loading to false", () => {
    const newState = appReducer(state, hideLoader());
    expect(newState.loading).toBeFalsy();
  });
});

it("should receive total pages", () => {
  const newState = appReducer(state, receiveTotalPages());
});
