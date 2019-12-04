import React from 'react';

const CharacterCard = ({ character }) => {
  console.log('Character Card:', character);
  const episodeApperances = character.films.map((film, i) => (
    <li key={i}>{film}</li>
  ));
  return (
    <div>
      <h2>Name: {character.name}</h2>
      <p>Homeworld: {character.homeworld}</p>
      <p>Population: {character.population}</p>
      <p>Species: {character.species}</p>
      <ul>Appear in: {episodeApperances}</ul>
    </div>
  );
};

export default CharacterCard;
