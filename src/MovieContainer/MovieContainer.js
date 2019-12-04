import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ({ movies }) => {
  const allMovies = movies.map((movie, i) => {
    return (
      <MovieCard
        title={movie.title}
        episode_id={movie.episode_id}
        release_date={movie.release_date}
        key={i}
      />
    );
  });

  return (
    <div>
      <div>{allMovies}</div>
    </div>
  );
};

export default MovieContainer;
