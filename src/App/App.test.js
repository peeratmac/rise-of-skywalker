import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the App Component Snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
