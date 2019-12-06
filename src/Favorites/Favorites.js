import React from 'react';
import './Favorites.css';
import CharacterCard from '../CharacterCard/CharacterCard';

const Favorites = ({ favoriteCharacters, setupFavoriteCharacters }) => {
  const allFavoriteCharacters = favoriteCharacters.map((character, i) => {
    return (
      <CharacterCard
        character={character}
        setupFavoriteCharacters={setupFavoriteCharacters}
        key={i}
      />
    );
  });

  return (
    <div>
      <div>{allFavoriteCharacters}</div>
    </div>
  );
};

export default Favorites;
