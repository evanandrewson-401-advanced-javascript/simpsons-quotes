import { setQuotePromise, UPDATE_QUOTE, UPDATE_QUOTE_LOADING, UPDATE_QUOTE_DONE } from './quoteDataActions';

jest.mock('../services/apiCall', () => ({
  apiCall: () => Promise.resolve([])
}));

describe('quote data actions', () => {
  it('setQuotePromise returns the expected action', () => {
    const result = setQuotePromise();
    expect(result).toEqual({
      type: UPDATE_QUOTE,
      pendingType: UPDATE_QUOTE_LOADING,
      fulfilledType: UPDATE_QUOTE_DONE,
      payload: Promise.resolve([])
    });
  });
});
