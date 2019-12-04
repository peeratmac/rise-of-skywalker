import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';

const MovieContainer = ({ movies }) => {
  const allMovies = movies.map((movie, i) => {
    return (
      <div className='grid-2'>
        <MovieCard
          title={movie.title}
          episode_id={movie.episode_id}
          release_date={movie.release_date}
          key={i}
        />
      </div>
    );
  });

  return (
    <div>
      <div>{allMovies}</div>
    </div>
  );
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired
};
