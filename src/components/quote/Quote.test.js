import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders Quote component', () => {
    const wrapper = shallow(<Quote quote={''} characterImage={''} characterName={''}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
