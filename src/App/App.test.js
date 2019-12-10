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

  it('should have default values for all states for the forms and for allMoviesData that include selectedCharacters and favoriteCharacters', () => {
    wrapper = shallow(<App />);
    expect(wrapper.state('userName')).toEqual('');
    expect(wrapper.state('userQuote')).toEqual('');
    expect(wrapper.state('userRank')).toEqual('');
    expect(wrapper.state('allMoviesData')).toEqual([]);
    expect(wrapper.state('selectedCharacters')).toEqual([]);
    expect(wrapper.state('favoriteCharacters')).toEqual([]);
  });
});
