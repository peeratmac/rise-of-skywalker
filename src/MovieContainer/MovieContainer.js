import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';

const MovieContainer = ({ movies, setupCharacters, updateCrawling }) => {
  const releasedOrder = [4, 5, 6, 1, 2, 3, 7];
  const allMovies = movies.map((movie, i) => {
    return (
      <MovieCard
        title={movie.title}
        episode_id={movie.episode_id}
        release_date={movie.release_date}
        setupCharacters={setupCharacters}
        updateCrawling={updateCrawling}
        movieIndex={i}
        id={releasedOrder[i]}
        key={i}
      />
    );
  });

  return <div className='grid-2'>{allMovies}</div>;
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  setupCharacters: PropTypes.func.isRequired,
  updateCrawling: PropTypes.func.isRequired
};
