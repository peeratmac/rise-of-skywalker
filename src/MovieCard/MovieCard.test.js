import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MOVIE CARD', () => {
  let wrapper;

  const mockTitle = 'Rise of Skywalker';
  const mockEpisodeID = 8;
  const mockReleaseDate = '2019';
  const mockSetupCharacters = jest.fn();
  const mockUpdateCrawling = jest.fn();
  const mockMovieIndex = 7;
  const mockID = 8;

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        title={mockTitle}
        episode_id={mockEpisodeID}
        release_date={mockReleaseDate}
        setupCharacters={mockSetupCharacters}
        updateCrawling={mockUpdateCrawling}
        movieIndex={mockMovieIndex}
        id={mockID}
      />
    );
  });

  it('should match the MovieCard Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
