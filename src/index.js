import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BookInfo from "./BookInfo";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import searchReducer from "./reducers/searchReducer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const logger = createLogger();
let store = createStore(searchReducer, applyMiddleware(logger));
const RoutedApp = (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route exact path="/book" component={BookInfo} />
    </Provider>
  </Router>
);

ReactDOM.render(RoutedApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
