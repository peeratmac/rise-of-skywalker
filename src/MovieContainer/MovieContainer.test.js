import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from './MovieContainer';

describe('MOVIE CONTAINER', () => {
  let wrapper;

  const mockMovies = [];
  const mockSetupCharacters = jest.fn();
  const mockUpdateCrawling = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer
        movies={mockMovies}
        setupCharacters={mockSetupCharacters}
        updateCrawling={mockUpdateCrawling}
      />
    );
  });

  it('should match the MovieContainer Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
