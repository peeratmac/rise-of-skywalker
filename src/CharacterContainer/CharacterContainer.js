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
      <div className='loading-page'>
        <React.Fragment>
          <h2>RISE OF SKYWALKER is working hard for you!</h2>
          <h2>Enjoy BB8 acting cute while the page is loading...</h2>
          <img src={loadingImage} alt='Loading Image of BB8' />
        </React.Fragment>
      </div>
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
    <section className='character-container'>
      <div className='fade'>
      <div className='crawl-container'>
        <p className='crawling-text'>{crawl}</p>
      </div>
      </div>
      <div className='grid-3'>        {allCharacters}
      </div>
    </section>
  );
};

export default CharacterContainer;
