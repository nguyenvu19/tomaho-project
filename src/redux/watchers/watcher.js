import { all } from "redux-saga/effects";
import { productWatcher } from "./productWatcher";
import { cartWatcher } from "./cartWatcher";

export default function* rootWatcher() {
  yield all([productWatcher(), cartWatcher()]);
}
