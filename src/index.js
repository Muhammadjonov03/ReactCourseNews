import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, { addNews, onNewsTitleInputChange, subscribe } from './redux/store'
export const reRender = (state) => {
  ReactDOM.render(
  <BrowserRouter>
  <App  state={state} onNewsTitleInputChange={onNewsTitleInputChange} addNews={addNews}/>
  </BrowserRouter>,
  document.getElementById('root')
);}

reRender(state)
subscribe(reRender)