// src/store.js

import {
  createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import {
  createLogger
} from 'redux-logger'
import rootReducer from './reducers';

const middleWare = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleWare.push(createLogger());
}

let store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
);

export default store;