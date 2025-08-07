import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTimeStart,
  fetchTimeSuccess,
  fetchTimeFailure,
} from "../slices/widgetSlice";
import { fetchWorldTime } from "../../services/api";

function* handleFetchTimeSaga() {
  try {
    const data = yield call(fetchWorldTime);
    yield put(fetchTimeSuccess(data));
  } catch (error) {
    yield put(fetchTimeFailure(error.message));
  }
}

export function* watchWidgetSagas() {
  yield takeLatest(fetchTimeStart.type, handleFetchTimeSaga);
}
