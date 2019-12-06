import React, { Component } from 'react';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Favorites from '../Favorites/Favorites';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userQuote: '',
      userRank: '',
      allMoviesData: [],
      crawlingIndex: null,
      selectedCharacters: [],
      favoriteCharacters: []
    };
  }

  componentDidMount() {
    getAllMoviesData().then(data => this.setState({ allMoviesData: data }));
  }

  setupCharacters = movieIndex => {
    setupCharactersData(movieIndex).then(data =>
      this.setState({ selectedCharacters: data })
    );
  };

  updateCrawling = episodeID => {
    this.setState({ crawlingIndex: episodeID - 1 });
  };

  setupUserProfile = (userName, userQuote, userRank) => {
    this.setState({
      userName: userName,
      userQuote: userQuote,
      userRank: userRank
    });
  };

  render = () => {
    return (
      <div>
        <Route
          exact
          path='/'
          render={props => (
            <LoginForm {...props} setupUserProfile={this.setupUserProfile} />
          )}
        />

        <Route
          exact
          path='/movies'
          render={props => (
            <MovieContainer
              {...props}
              movies={this.state.allMoviesData}
              setupCharacters={this.setupCharacters}
              updateCrawling={this.updateCrawling}
            />
          )}
        />

        <Route
          exact
          path='/movies/:id'
          render={props => (
            <CharacterContainer
              {...props}
              characters={this.state.selectedCharacters}
              crawl={
                this.state.allMoviesData[this.state.crawlingIndex].opening_crawl
              }
            />
          )}
        />

        <Route
          exact
          path='/favorites'
          render={props => (
            <Favorites
              {...props}
              favoriteCharacters={this.state.favoriteCharacters}
            />
          )}
        />
      </div>
    );
  };
}

export default App;
