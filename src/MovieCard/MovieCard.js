import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ title, episode_id, release_date }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <h3>Episode: {episode_id}</h3>
      <h3>Release: {release_date}</h3>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired
};
