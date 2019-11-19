import { UPDATE_QUOTE, UPDATE_QUOTE_LOADING, UPDATE_QUOTE_DONE } from '../actions/quoteDataActions';
import reducer from './quotesReducer';

describe('quote selectors', () => {
  it('handles action type UPDATE_QUOTE', () => {
    const state = {
      loading: false,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    };
    const action = {
      type: UPDATE_QUOTE,
      payload: [
        {
          quote: 'Well, I\'m better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can\'t compete with that stuff.',
          character: 'Moe Szyslak',
          image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411',
          characterDirection: 'Right'
        }
      ]
    };
    const result = reducer(state, action);
    expect(result).toEqual({
      loading: false,
      quote: 'Well, I\'m better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can\'t compete with that stuff.',
      characterName: 'Moe Szyslak',
      characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411',
    });
  });
  it('handles action type UPDATE_QUOTE_LOADING', () => {
    const state = {
      loading: false,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    };
    const action = {
      type: UPDATE_QUOTE_LOADING
    };
    const result = reducer(state, action);
    expect(result).toEqual({
      loading: true,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    });
  });
  it('handles action type UPDATE_QUOTE_DONE', () => {
    const state = {
      loading: false,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    };
    const action = {
      type: UPDATE_QUOTE_DONE
    };
    const result = reducer(state, action);
    expect(result).toEqual({
      loading: true,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    });
  });
});
