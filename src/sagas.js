import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchGoods } from './reducers';

function* fetchGoodsSaga() {
  try {
    const goods = yield call(() => fetch('/goods').then(res => res.json()));
    yield put({ type: 'goods/fetchGoods/fulfilled', payload: goods });
  } catch (e) {
    yield put({ type: 'goods/fetchGoods/rejected', error: e.message });
  }
}

export function* goodsSaga() {
  yield takeLatest(fetchGoods.pending.type, fetchGoodsSaga);
}
