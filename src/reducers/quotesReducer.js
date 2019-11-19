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
      return { ...state, quote: action.payload[0].quote, characterName: action.payload[0].character, characterImage: action.payload[0].image };
    case UPDATE_QUOTE_LOADING:
    case UPDATE_QUOTE_DONE:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
}
