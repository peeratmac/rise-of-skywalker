import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({
  userName,
  userQuote,
  userRank,
  stateUpdateIsCharactersDataLoaded,
  numberOfFavoriteCharacters,
  clearFavoritesUponSignout
}) => {
  return (
    <div className='nav-card'>
      <div className='user-profile'>
        <p className='user-name'>User Name : {userName}</p>
        <p className='user-quote'>Favorite Quote : "{userQuote}"</p>
        <p className='user-rank'>Rank : {userRank}</p>
      </div>
      <div className='navigation-pane'>
        <Link to='/favorites'>
          <button className='navigation-button'>
            Favorite Characters ({numberOfFavoriteCharacters.length})
          </button>
        </Link>
        <Link to='/movies'>
          <button
            onClick={stateUpdateIsCharactersDataLoaded}
            className='navigation-button'>
            Back to All Episodes
          </button>
        </Link>
        <Link to='/'>
          <button
            onClick={(stateUpdateIsCharactersDataLoaded, clearFavoritesUponSignout)
            }
            className='navigation-button'>
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
