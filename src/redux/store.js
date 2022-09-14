import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./watchers/watcher";
import rootReducer from "./reducers/reducer";

// Tạo saga vào apply middleware saga vào store
const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);
export default store;
