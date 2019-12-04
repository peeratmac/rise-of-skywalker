import React, { Component } from 'react';
import './LoginForm.scss'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: 'Youngling'
    };
  }

  resetInputFields = e => {
    console.log(this.state)
    this.setState({
      name: '',
      quote: '',
      rank: 'Youngling'})
      console.log(this.state)
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className='login-page'>
        <h1>Rise of Skywalker</h1>
        <form>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Enter Your Name'
            onChange={e => this.handleChange(e)}
          />
          <input
            type='text'
            name='quote'
            value={this.state.quote}
            placeholder='Enter Your Favorite Quote. Ex: Finn is the best'
            onChange={e => this.handleChange(e)}
          />
          <select name='rank' value={this.state.rank} onChange={e => this.handleChange(e)}>
            <option value='Youngling'>Youngling</option>
            <option value='Padawan'>Padawan</option>
            <option value='Jedi Knight'>Jedi Knight</option>
            <option value='Jedi Master'>Jedi Master</option>
          </select>
          <button type='button' className='login-btn' onClick={this.resetInputFields}>Submit to Proceed</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
