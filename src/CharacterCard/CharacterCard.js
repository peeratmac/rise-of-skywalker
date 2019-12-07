import React from 'react';
import './CharacterCard.css';
import isFavoriteFalse from '../../src/images/isFavoriteFalse.svg';
import isFavoriteTrue from '../../src/images/isFavoriteTrue.svg';

const CharacterCard = ({
  character,
  setupFavoriteCharacters,
  favoriteCharactersMap
}) => {
  console.log('Character Card:', character);
  const favoriteImageSource =
    favoriteCharactersMap && favoriteCharactersMap.includes(character.name)
      ? isFavoriteTrue
      : isFavoriteFalse;
  const episodeApperances = character.films.map((film, i) => (
    <li key={i}>{film}</li>
  ));

  return (
    <div>
      <div className='card'>
        <img
          onClick={() =>
            setupFavoriteCharacters({ ...character }, character.name)
          }
          className={'favorite-image'}
          src={favoriteImageSource}
          alt='favorite icon'
        />
        <h2>Name: {character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
        <p>Population: {character.population}</p>
        <p>Species: {character.species}</p>
        <ul className='episode-list'>Appear in: {episodeApperances}</ul>
        <button
          onClick={() =>
            setupFavoriteCharacters({ ...character }, character.name)
          }
          className='button'
          type='button'>
          Favorite
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
