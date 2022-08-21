import { all, fork } from "redux-saga/effects";

//public
import Movies from "./movies/saga";
export default function* rootSaga() {
  yield all([
    //public
    fork(Movies)
  ]);
}
