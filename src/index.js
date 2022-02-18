import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
export const reRender = (state) => {
  debugger
  ReactDOM.render(
  <BrowserRouter>
    <App  state={state} onNewsTitleInputChange={store.onNewsTitleInputChange.bind(store)} addNews={store.addNews}/>
  </BrowserRouter>,
  document.getElementById('root')
);}

reRender(store.getState())
store.subscribe(reRender)