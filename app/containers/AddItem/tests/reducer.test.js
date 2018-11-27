import { fromJS } from 'immutable';
import addItemReducer from '../reducer';
import { addItem, addItemSuccess, addItemError } from '../actions';
// import { ADD_ITEM_SUCCESS } from '../constants';

describe('addItemReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = fromJS({
      item: '',
      success: false,
      error: false,
    });
  });

  it('should return initial state when actions to not match', () => {
    expect(addItemReducer(undefined, {})).toMatchSnapshot();
  });

  it('should properly handle getItemsSuccess action', () => {
    const item = 'Test item';
    expect(addItemReducer(initialState, addItem(item))).toMatchSnapshot();
  });

  it('should properly handle addItemSuccess action', () => {
    expect(addItemReducer(initialState, addItemSuccess())).toMatchSnapshot();
  });

  it('should properly handle addItemError action', () => {
    expect(addItemReducer(initialState, addItemError())).toMatchSnapshot();
  });
});
