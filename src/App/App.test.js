import React from 'react';
import { shallow } from 'enzyme';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
jest.mock('../apiCalls.js');
import App from './App';

describe.only('APP', () => {
  let wrapper;

  beforeEach(() => {
    getAllMoviesData.mockImplementation(() => {
      return Promise.resolve([{}, {}, {}, {}, {}, {}, {}]);
    });

    setupCharactersData.mockImplementation(() => {
      return Promise.resolve([{}, {}, {}]);
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

  it('should have default values for crawlingIndex and other conditional renderings that include isCharactersDataLoaded and error', () => {
    wrapper = shallow(<App />);
    expect(wrapper.state('crawlingIndex')).toEqual(null);
    expect(wrapper.state('isCharactersDataLoaded')).toEqual(false);
    expect(wrapper.state('error')).toEqual('');
  });

  it('should be able to setupUserProfile with userName, userQuote, and userRank', () => {
    wrapper.setState({
      userName: 'Peerat',
      userQuote: 'I love programming in JavaScript with React!',
      userRank: 'Jedi Knight'
    });
  });

  it('should be able to setupCharacters with all the data', async () => {
    wrapper = shallow(<App />);
    await wrapper.instance().setupCharacters(6);
    expect(setupCharactersData).toHaveBeenCalled();
  });
  
    it('should reset the character data state', () => {
    const startState = { isCharactersDataLoaded: true, selectedCharacters: [{ name: 'Leia' }, { name: 'Jabba the Hutt' }] }
    const endState = { isCharactersDataLoaded: false, selectedCharacters: [] }

    wrapper.setState(startState)

    wrapper.instance().stateUpdateIsCharactersDataLoaded()

    expect(wrapper.state().isCharactersDataLoaded).toEqual(false)

    expect(wrapper.state().selectedCharacters).toEqual([])
  });
