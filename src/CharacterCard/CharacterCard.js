import React from 'react';

const CharacterCard = ({ character }) => {
  console.log('Character Card:', character);
  return (
    <div>
      <h1>Name: {character.name}</h1>
    </div>
  );
};

export default CharacterCard;
