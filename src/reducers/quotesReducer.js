import { UPDATE_QUOTE, UPDATE_QUOTE_LOADING, UPDATE_QUOTE_DONE } from '../actions/quoteDataActions';

const initialState = {
  loading: false,
  quote: '',
  characterName: '',
  characterImage: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_QUOTE:
      return { ...state, ...action.payload };
    case UPDATE_QUOTE_LOADING:
    case UPDATE_QUOTE_DONE:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
}
