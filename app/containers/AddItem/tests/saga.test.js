import { put, takeLatest } from 'redux-saga/effects';
import addItemSaga from '../saga';
import { postApi } from '../postApi';
import { ADD_ITEM } from '../constants';
import { addItemError } from '../actions';

const generator = addItemSaga();

describe('addItemSaga Saga', () => {
  const action = {
    item: 'Testing item',
  };

  const apiSaga = postApi(action);
  it('should handle addItemError action if unable to put in the db', () => {
    const putDescriptor = apiSaga.next().value;
    expect(putDescriptor).toEqual(put(addItemError()));
  });
});

describe('getItems Saga', () => {
  it('should start task to watch for ADD_ITEM action', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_ITEM, postApi));
  });
});
