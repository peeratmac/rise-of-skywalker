import React from 'react';
import './CharacterCard.css';
import isFavoriteFalse from '../../src/images/isFavoriteFalse.svg';
import isFavoriteTrue from '../../src/images/isFavoriteTrue.svg';
import PropTypes from 'prop-types';

const CharacterCard = ({
  character,
  setupFavoriteCharacters,
  favoriteCharactersMap
}) => {
  const favoriteImageSource =
    favoriteCharactersMap && favoriteCharactersMap.includes(character.name)
      ? isFavoriteTrue
      : isFavoriteFalse;
  const episodeApperances = character.films.map((film, i) => (
    <li key={i}>{film}</li>
  ));

  return (
    <div>
      <div className='character-card'>
        <h2 className='character-name'>{character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
        <p className='population'>Population: {character.population}</p>
        <p>Species: {character.species}</p>
        <ul className='episode-list'>Appears in: {episodeApperances}</ul>
        <img
          onClick={() =>
            setupFavoriteCharacters({ ...character }, character.name)
          }
          className={'favorite-image'}
          src={favoriteImageSource}
          alt='favorite icon'
        />
        <button
          onClick={() =>
            setupFavoriteCharacters({ ...character }, character.name)
          }
          className='character-card-button'
          type='button'>
          Favorite
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  setupFavoriteCharacters: PropTypes.func.isRequired,
  favoriteCharactersMap: PropTypes.array
};
