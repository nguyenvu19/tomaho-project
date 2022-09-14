import { all } from "redux-saga/effects";
import { productWatcher } from "./productWatcher";

export default function* rootWatcher() {
  yield all([productWatcher()]);
}
