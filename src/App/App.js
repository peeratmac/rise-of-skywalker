import React, { Component } from 'react';
import { getAllMoviesData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMoviesData: []
    };
  }

  componentDidMount() {
    getAllMoviesData().then(data => this.setState({ allMoviesData: data }));
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
