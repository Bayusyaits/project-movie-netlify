import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import createEnhancer from "../utils/createEnhancers";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  createEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
