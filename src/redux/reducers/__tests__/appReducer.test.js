import { hideLoader, showLoader, fetchError } from "../actions/appActions";
import { appReducer } from "../appReducer";

let state;

beforeEach(() => {
  state = {
    loading: false,
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

it("should trigger isError to true", () => {
  const newState = appReducer(state, fetchError());
  expect(newState.isError).toBeTruthy();
});
