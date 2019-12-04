import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';

const MovieContainer = ({ movies, setupCharacters }) => {
  const allMovies = movies.map((movie, i) => {
    return (
      <MovieCard
        title={movie.title}
        episode_id={movie.episode_id}
        release_date={movie.release_date}
        setupCharacters={setupCharacters}
        movieIndex={i}
        key={i}
      />
    );
  });

  return <div className='grid-2'>{allMovies}</div>;
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired
};
