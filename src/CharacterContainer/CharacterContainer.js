import React, { Fragment } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import loadingImage from '../images/loadingBB8.gif';
import './CharacterContainer.css';

const CharacterContainer = ({
  characters,
  crawl,
  setupFavoriteCharacters,
  favoriteCharactersMap
}) => {
  if (characters.length === 0) {
    return (
      <React.Fragment>
        <h2>RISE OF SKYWALKER is working hard for you!</h2>
        <h2>Enjoy our BB8 acting cute while the page is loading...</h2>
        <img src={loadingImage} alt='Loading Image of BB8' />
      </React.Fragment>
    );
  }

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
