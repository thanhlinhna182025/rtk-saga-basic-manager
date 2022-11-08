import { PayloadAction } from '@reduxjs/toolkit';
import counterSaga from 'features/counter/counterSaga';
import { incrementSaga, incrementSagaSuccess } from 'features/counter/counterSlice';
import { all, takeEvery, put, delay, takeLatest } from 'redux-saga/effects';

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('wait 2s');
  yield delay(2000);
  console.log('waited 2s , dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* () {
  console.log('rootSaga');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
