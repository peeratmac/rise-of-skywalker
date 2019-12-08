import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import { Route, BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
