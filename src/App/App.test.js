import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the APP Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
