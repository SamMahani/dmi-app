import { takeLatest } from 'redux-saga/effects';
import { ADD_ITEM } from './constants';
import { postApi } from './postApi';

export default function* addItemSaga() {
  yield takeLatest(ADD_ITEM, postApi);
}
