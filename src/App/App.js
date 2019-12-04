import React, { Component } from 'react';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMoviesData: [],
      crawlingIndex: null,
      selectedCharacters: []
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

  render = () => {
    return (
      <div>
        <h1>Rise of Skywalker Star Wars API</h1>
        <LoginForm />
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
                this.state.allMoviesData[this.state.selectedMovieIndex]
                  .opening_crawl
              }
              updateCrawling={this.updateCrawling}
            />
          )}
        />
      </div>
    );
  };
}

export default App;
