import React, { Component } from 'react';
import { getAllMoviesData, setupCharactersData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMoviesData: [],
      selectedMovie: ''
    };
  }

  componentDidMount() {
    getAllMoviesData().then(data => this.setState({ allMoviesData: data }));
    setupCharactersData(7);
  }

  render = () => {
    return (
      <div>
        <h1>Rise of Skywalker Star Wars API</h1>
        <LoginForm />
        <Route
          exact
          path='/movies'
          render={props => (
            <MovieContainer {...props} movies={this.state.allMoviesData} />
          )}
        />
      </div>
    );
  };
}

export default App;
