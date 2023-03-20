import React from "react";
import ReactDOM from "react-dom";

//Provider : accessing the state from anywhere regardless of being in any parent component or child component
//provider is going to keep track of that store which is that global state and that allows us to access that store
//from anywhere inside of the app
import { Provider } from "react-redux";
import "./index.css";

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // wrapping App in Provider so that we can use stored variable from "store"
  // after this we can use redux for dispatching get post requests
  // for this we will use useDispatch hook from react-reduc in App.js (now go to App.js and write code to use it)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//https://redux.js.org/introduction/why-rtk-is-redux-today
