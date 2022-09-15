import { select, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions";

export function* cartWatcher() {
  yield takeEvery(Actions.UPDATE_CART, workerUpdateCart);
}

function* workerUpdateCart(action) {
  try {
    const cart = yield select((state) => state.cartReducer.cart);
    console.log(cart);
    console.log(action.payload);
  } catch (error) {
    console.log("error");
  }
}
