import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('FAVORITES', () => {
  let wrapper;

  const mockFavoriteCharacters = [];
  const mockSetupFavoriteCharacters = jest.fn();
  const mockFavoriteCharactersMap = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Favorites
        favoriteCharacters={mockFavoriteCharacters}
        setupFavoriteCharacters={mockSetupFavoriteCharacters}
        favoriteCharactersMap={mockFavoriteCharactersMap}
      />
    );
  });

  it('should match the Favorites Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
