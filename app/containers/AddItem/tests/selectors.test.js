import { fromJS } from 'immutable';
import { itemSelector, successSelector, errorSelector } from '../selectors';

describe('AddItem selectors', () => {
  it('should select the proper item state', () => {
    const selector = itemSelector();
    const item = 'This is a test item';
    const mockedState = fromJS({
      addItem: {
        item,
      },
    });
    expect(selector(mockedState)).toEqual(item);
  });

  it('should select the proper success state', () => {
    const selector = successSelector();
    const mockedState = fromJS({
      addItem: {
        success: false,
      },
    });
    expect(selector(mockedState)).toEqual(false);
  });

  it('should select the proper error state', () => {
    const selector = errorSelector();
    const mockedState = fromJS({
      addItem: {
        error: false,
      },
    });
    expect(selector(mockedState)).toEqual(false);
  });
});
