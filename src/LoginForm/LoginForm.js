import React, { Component } from 'react';
import './LoginForm.scss';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: 'Youngling',
      isComplete: true,
      isReadyToLogin: false
    };
  }

  resetInputFields = () => {
    this.setState({
      name: '',
      quote: '',
      rank: 'Youngling'
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { name, quote, rank } = this.state;
    if (name && quote) {
      this.props.setupUserProfile(name, quote, rank);
      this.setState({ isReadyToLogin: true, isComplete: true });
      this.resetInputFields();
    } else {
      this.setState({ isReadyToLogin: false, isComplete: false });
    }
  };

  render() {
    const { isReadyToLogin, isComplete } = this.state;
    const isFormComplete = isComplete ? 'do-not-show-error' : 'show-error';

    if (isReadyToLogin) {
      return <Redirect to='/movies' />;
    }

    return (
      <div className='login-page'>
        <h1>Rise of Skywalker</h1>

        <form>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Enter Your Name. Ex: Finn'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='quote'
            value={this.state.quote}
            placeholder='Enter Your Favorite Quote. Ex: Finn is the best'
            onChange={this.handleChange}
          />
          <select
            name='rank'
            value={this.state.rank}
            onChange={this.handleChange}>
            <option value='Youngling'>Youngling</option>
            <option value='Padawan'>Padawan</option>
            <option value='Jedi Knight'>Jedi Knight</option>
            <option value='Jedi Master'>Jedi Master</option>
          </select>
          <button
            type='button'
            className='login-btn'
            onClick={this.handleSubmit}>
            Submit to Proceed
          </button>
          <h2 className={isFormComplete}>
            Please complete all fields to continue!
          </h2>
        </form>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  setupUserProfile: PropTypes.func.isRequired
};
