import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './CharacterContainer';

describe('CHARACTER CONTAINER', () => {
  let wrapper;

  const mockCharacters = [];
  const mockCrawl =
    'Rise of Skywalker is all about Finn and friends...in the galaxy, far, far away.';
  const mockSetupFavoriteCharacters = jest.fn();
  const mockFavoriteCharactersMap = [];

  beforeEach(() => {
    wrapper = shallow(
      <CharacterContainer
        characters={mockCharacters}
        crawl={mockCrawl}
        setupFavoriteCharacters={mockSetupFavoriteCharacters}
        favoriteCharactersMap={mockFavoriteCharactersMap}
      />
    );
  });

  it('should match the CharacterContainer Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
