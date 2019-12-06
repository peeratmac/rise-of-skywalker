import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ userName, userQuote, userRank }) => {
  return (
    <div>
      <div className='user-profile'>
        <p>Name: {userName}</p>
        <p>Favorite Quote: "{userQuote}"</p>
        <p>Rank: {userRank}</p>
      </div>
      <div className='navigation-pane'>
        <Link to='/favorites'>
          <button>Favorite Characters</button>
        </Link>
        <Link to='/movies'>
          <button>Back to All Episodes</button>
        </Link>
        <Link to='/'>
          <button>Sign Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
