import { apiCall } from '../services/apiCall';

export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const UPDATE_QUOTE_LOADING = 'UPDATE_QUOTE_LOADING';
export const UPDATE_QUOTE_DONE = 'UPDATE_QUOTE_DONE';

export const setQuotePromise = () => ({
  type: UPDATE_QUOTE,
  pendingType: UPDATE_QUOTE_LOADING,
  fulfilledType: UPDATE_QUOTE_DONE,
  payload: apiCall()
});
