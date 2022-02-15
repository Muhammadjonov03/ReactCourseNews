import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state from './redux/state'

ReactDOM.render(
  <BrowserRouter>
  <App state={state}/>
  </BrowserRouter>,
  document.getElementById('root')
);
