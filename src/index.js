import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addNews, onNewsTitleInputChange, subscribe } from './redux/store'
import state from './redux/store';
import {store} from './redux/store'
export const reRender = (store) => {ReactDOM.render(
  <BrowserRouter>
  <App state={store.getState()} onNewsTitleInputChange={store.onNewsTitleInputChange} addNews={store.addNews}/>
  </BrowserRouter>,
  document.getElementById('root')
);}

reRender(store)
store.subscribe(reRender)