import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
} from "../slices/taskSlice";

function* handleAddTaskSaga(action) {
  try {
    const title = action.payload;
    yield delay(500);
    yield put(addTaskSuccess(title));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

export function* watchTaskSagas() {
  yield takeLatest(addTaskStart.type, handleAddTaskSaga);
}
