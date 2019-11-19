import React from 'react';
import { shallow } from 'enzyme';
import SimpsonsQuote from './SimpsonsQuote';
import store from '../store';

describe('SimpsonsQuote component', () => {
  it('renders SimpsonsQuote', () => {
    const wrapper = shallow(<SimpsonsQuote store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
