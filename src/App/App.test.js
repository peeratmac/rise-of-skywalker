import React from 'react';
import { shallow } from 'enzyme';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
jest.mock('../apiCalls.js');
import App from './App';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    getAllMoviesData.mockImplementation(() => {
      return Promise.resolve([{}, {}, {}, {}, {}, {}, {}]);
    });
  });

  it('should match the App Component Snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should getAllMoviesData upon mounting', () => {
    shallow(<App />);
    expect(getAllMoviesData).toHaveBeenCalled();
  });
});
