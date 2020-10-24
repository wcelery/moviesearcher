import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
