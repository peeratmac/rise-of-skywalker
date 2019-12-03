import React, { Component } from 'react';

class LoginForm extends Component {
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
              onChange={}
            />
            <input
              type='text'
              name='quote'
              value={this.state.quote}
              placeholder='Enter Your Favorite Quote, example: Finn is the best, hello, I am the Force.'
              onChange={}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
