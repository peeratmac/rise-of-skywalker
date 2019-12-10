import React from 'react';
import './Favorites.css';
import isFavoriteFalse from '../../src/images/isFavoriteFalse.svg';
import CharacterCard from '../CharacterCard/CharacterCard';

const Favorites = ({
  favoriteCharacters,
  setupFavoriteCharacters,
  favoriteCharactersMap
}) => {
  if (favoriteCharacters.length === 0) {
    return (
      <React.Fragment>
        <h2>
          You can favorite any of the characters you like by pressing the cute
          BB8 icon or the favorite button on each character!
        </h2>
        <img className='bb8-image' src={isFavoriteFalse} alt='BB8 Icon' />
      </React.Fragment>
    );
  }

  const allFavoriteCharacters = favoriteCharacters.map((character, i) => {
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
      <div>{allFavoriteCharacters}</div>
    </div>
  );
};

export default Favorites;
