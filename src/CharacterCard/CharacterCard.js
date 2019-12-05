import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  console.log('Character Card:', character);
  const episodeApperances = character.films.map((film, i) => (
    <li key={i}>{film}</li>
  ));
  return (
    <div>
      <div className='card'>
        <h2>Name: {character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
        <p>Population: {character.population}</p>
        <p>Species: {character.species}</p>
        <ul>Appear in: {episodeApperances}</ul>
        <button className='button' type='button'>
          Favorite
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
