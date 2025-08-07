import { all } from "redux-saga/effects";
import { watchTaskSagas } from "./taskSagas";
import { watchWidgetSagas } from "./widgetSagas";

export default function* rootSaga() {
  yield all([watchTaskSagas(), watchWidgetSagas()]);
}
