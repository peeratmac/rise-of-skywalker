import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ userName, userQuote, userRank }) => {
  return (
    <div className='card'>
      <div className='user-profile'>
        <p>{userName}</p>
        <p>"{userQuote}"</p>
        <p>{userRank}</p>
      </div>
      <div className='navigation-pane'>
        <Link to='/favorites'>
          <button className='navigation-button'>Favorite Characters</button>
        </Link>
        <Link to='/movies'>
          <button className='navigation-button'>Back to All Episodes</button>
        </Link>
        <Link to='/'>
          <button className='navigation-button'>Sign Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
