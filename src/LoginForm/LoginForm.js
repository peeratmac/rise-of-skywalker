import React, { Component } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: 'Youngling'
    };
  }

  resetInputFields = event => {
    this.setState({
      name: '',
      quote: '',
      rank: 'Youngling'
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className='login-page'>
        <h1>Rise of Skywalker</h1>
        <form>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Enter Your Name. Ex: Finn'
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            name='quote'
            value={this.state.quote}
            placeholder='Enter Your Favorite Quote. Ex: Finn is the best'
            onChange={event => this.handleChange(event)}
          />
          <select
            name='rank'
            value={this.state.rank}
            onChange={e => this.handleChange(e)}>
            <option value='Youngling'>Youngling</option>
            <option value='Padawan'>Padawan</option>
            <option value='Jedi Knight'>Jedi Knight</option>
            <option value='Jedi Master'>Jedi Master</option>
          </select>
          <Link className='link' to={`/movies`}>
            <button
              type='button'
              className='login-btn'
              onClick={this.resetInputFields}>
              Submit to Proceed
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
