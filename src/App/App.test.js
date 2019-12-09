import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe.only('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the App Component Snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  //need to test setupcharacters

  it('should reset the character data state', () => {
    const startState = {isCharactersDataLoaded: true, selectedCharacters: [{name: 'Leia'}, {name: 'Jabba the Hutt'}] }
    const endState = {isCharactersDataLoaded: false, selectedCharacters: [] }

    wrapper.setState(startState)

    wrapper.instance().stateUpdateIsCharactersDataLoaded()

    expect(wrapper.state().isCharactersDataLoaded).toEqual(false)

    expect(wrapper.state().selectedCharacters).toEqual([])

  })


});