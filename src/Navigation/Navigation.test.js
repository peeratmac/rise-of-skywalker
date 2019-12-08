import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  let wrapper;

  const mockUserName = 'Peerat';
  const mockUserQuote = 'Naomi is amazing!';
  const mockUserRank = 'Jedi Master';
  const mockStateUpdateIsCharactersDataLoaded = jest.fn();
  const mockNumberOfFavoriteCharacters = 5;
  const mockClearFavoritesUponSignout = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Navigation
        userName={mockUserName}
        userQuote={mockUserQuote}
        userRank={mockUserRank}
        stateUpdateIsCharactersDataLoaded={
          mockStateUpdateIsCharactersDataLoaded
        }
        numberOfFavoriteCharacters={mockNumberOfFavoriteCharacters}
        clearFavoritesUponSignout={mockClearFavoritesUponSignout}
      />
    );
  });

  it('should match the Navigation Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
