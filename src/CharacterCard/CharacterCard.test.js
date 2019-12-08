import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CHARACTER CARD', () => {
  let wrapper;

  const mockCharacter = {
    homeworld: 'SpaceX Occupying Mars',
    species: 'Human',
    films: ['The Day After Tomorrow', 'The Martian', 'Gravity'],
    name: 'BB8'
  };
  const mockSetupFavoriteCharacters = jest.fn();
  const mockFavoriteCharactersMap = [];

  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard
        character={mockCharacter}
        setupFavoriteCharacters={mockSetupFavoriteCharacters}
        favoriteCharactersMap={mockFavoriteCharactersMap}
      />
    );
  });

  it('should match the CharacterCard Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
