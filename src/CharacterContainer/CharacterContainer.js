import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterContainer.css';

const CharacterContainer = ({
  characters,
  crawl,
  setupFavoriteCharacters,
  favoriteCharactersMap
}) => {
  const allCharacters = characters.map((character, i) => {
    return (
      <CharacterCard
        character={character}
        setupFavoriteCharacters={setupFavoriteCharacters}
        favoriteCharactersMap={favoriteCharactersMap}
        key={i}
      />
    );
  });

  return (
    <div>
      <p>{crawl}</p>
      <div className='grid-3'>{allCharacters}</div>
    </div>
  );
};

export default CharacterContainer;
