import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = props => {
  const { movies } = props;

  const allMovies = movies.map((movie, i) => {
    return <MovieCard title={movie.title} key={i} />;
  });

  return (
    <div>
      <h1>{allMovies}</h1>
    </div>
  );
};

export default MovieContainer;
