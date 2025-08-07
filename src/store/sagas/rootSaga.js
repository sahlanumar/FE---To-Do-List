import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    // Contoh: watchTaskSagas(),
    // Contoh: watchWidgetSagas(),
  ]);
}
