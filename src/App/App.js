import React, { Component } from 'react';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Favorites from '../Favorites/Favorites';
import Navigation from '../Navigation/Navigation';
import { Route } from 'react-router-dom';
import './App.css';

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
      favoriteCharacters: [],
      isCharactersDataLoaded: false,
      error: ''
    };
  }

  componentDidMount() {
    getAllMoviesData()
      .then(data => this.setState({ allMoviesData: data }))
      .catch(error => this.setState({ error: error.message }));
  }

  setupCharacters = movieIndex => {
    setupCharactersData(movieIndex)
      .then(data => this.setState({ selectedCharacters: data }))
      .then(() => this.setState({ isCharactersDataLoaded: true }));
  };

  stateUpdateIsCharactersDataLoaded = () => {
    this.setState({ isCharactersDataLoaded: false, selectedCharacters: [] });
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

  setupFavoriteCharacters = (characterInQuestion, currentCharacterName) => {
    const { favoriteCharacters } = this.state;
    const allNames = favoriteCharacters.map(character => character.name);

    if (allNames.includes(currentCharacterName)) {
      const filteredCharacters = favoriteCharacters.filter(
        character => character.name !== currentCharacterName
      );
      this.setState({ favoriteCharacters: filteredCharacters });
    } else {
      this.setState({
        favoriteCharacters: [...favoriteCharacters, characterInQuestion]
      });
    }
  };

  clearFavoritesUponSignout = () => {
    this.setState({ favoriteCharacters: [] });
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
              setupFavoriteCharacters={this.setupFavoriteCharacters}
              favoriteCharactersMap={this.state.favoriteCharacters.map(
                character => character.name
              )}
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
              setupFavoriteCharacters={this.setupFavoriteCharacters}
              favoriteCharactersMap={this.state.favoriteCharacters.map(
                character => character.name
              )}
            />
          )}
        />

        <Route
          path='/movies'
          render={props => (
            <Navigation
              {...props}
              userName={this.state.userName}
              userQuote={this.state.userQuote}
              userRank={this.state.userRank}
              stateUpdateIsCharactersDataLoaded={
                this.stateUpdateIsCharactersDataLoaded
              }
              numberOfFavoriteCharacters={this.state.favoriteCharacters}
              clearFavoritesUponSignout={this.clearFavoritesUponSignout}
            />
          )}
        />

        <Route
          path='/favorites'
          render={props => (
            <Navigation
              {...props}
              userName={this.state.userName}
              userQuote={this.state.userQuote}
              userRank={this.state.userRank}
              stateUpdateIsCharactersDataLoaded={
                this.stateUpdateIsCharactersDataLoaded
              }
              numberOfFavoriteCharacters={this.state.favoriteCharacters}
              clearFavoritesUponSignout={this.clearFavoritesUponSignout}
            />
          )}
        />
      </div>
    );
  };
}

export default App;
