import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ({ characters, crawl }) => {
  const allCharacters = characters.map((character, i) => {
    return <CharacterCard character={character} key={i} />;
  });

  return (
    <div>
      <p>{crawl}</p>
      <h1>{allCharacters}</h1>
    </div>
  );
};

export default CharacterContainer;
