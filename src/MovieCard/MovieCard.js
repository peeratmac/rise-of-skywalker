import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({
  title,
  episode_id,
  release_date,
  setupCharacters,
  updateCrawling,
  movieIndex,
  id
}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <h3>Episode: {episode_id}</h3>
      <h3>Release: {release_date.slice(0, 4)}</h3>
      <Link to={`/movies/${id}`}>
        <button
          id={episode_id}
          className='button'
          type='button'
          onClick={() => {
            updateCrawling(movieIndex + 1);
            setupCharacters(movieIndex + 1);
          }}>
          View Characters
        </button>
      </Link>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired
};
