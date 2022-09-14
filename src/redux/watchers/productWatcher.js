import { select, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions";

export function* productWatcher() {
  yield takeEvery(Actions.CREATE_NEW_PRODUCT, workerAddNewProduct);
}

function* workerAddNewProduct(action) {
  try {
    const product = yield select((state) => state.productReducer.products);
    console.log(product);
  } catch (error) {
    console.log("error");
  }
}
