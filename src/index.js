import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
export const reRender = (store) => {
  debugger
  ReactDOM.render(
  <BrowserRouter>
    <App store={store} dispatch={store.dispatch.bind(store)}/>
  </BrowserRouter>,
  document.getElementById('root')
);}

reRender(store)
store.subscribe(reRender)