import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: 'Youngling'
    };
  }
  render() {
    return (
      <div>
        <div className='name-quote-rank'>
          <form>
            <input
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Enter Your Name, example: John Boyega'
            />
            <input
              type='text'
              name='quote'
              value={this.state.quote}
              placeholder='Enter Your Favorite Quote, example: Finn is the best, hello, I am the Force.'
            />
            <select name='rank' value={this.state.rank}>
              <option value='Youngling'>Youngling</option>
              <option value='Padawan'>Padawan</option>
              <option value='Jedi Knight'>Jedi Knight</option>
              <option value='Jedi Master'>Jedi Master</option>
            </select>
            <button type='button'>Submit to Proceed</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
