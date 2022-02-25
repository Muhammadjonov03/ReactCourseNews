import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { onProfilePopupToggledActionCreator } from './redux/header-reducer'
import { addNewsActionCreator, onNewsTitleInputChangeActionCreator } from './redux/news-reducer';
export const reRender = (store) => {
  debugger
  ReactDOM.render(
  <BrowserRouter>
    <App store={store} 
    onNewsTitleInputChangeActionCreator={onNewsTitleInputChangeActionCreator}
    onProfilePopupToggledActionCreator={onProfilePopupToggledActionCreator}
    addNewsActionCreator={addNewsActionCreator}
    dispatch={store.dispatch.bind(store)} />
  </BrowserRouter>,
  document.getElementById('root')
);}

reRender(store)
store.subscribe(reRender)