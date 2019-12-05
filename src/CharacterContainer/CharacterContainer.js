import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterContainer.css';

const CharacterContainer = ({ characters, crawl }) => {
  const allCharacters = characters.map((character, i) => {
    return <CharacterCard character={character} key={i} />;
  });

  return (
    <div>
      <p>{crawl}</p>
      <div className='grid-3'>{allCharacters}</div>
    </div>
  );
};

export default CharacterContainer;
