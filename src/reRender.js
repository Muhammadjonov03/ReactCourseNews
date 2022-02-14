import  React   from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {onAddNews, onAddNewsAuthorChange, onAddNewsInputChange} from './redux/state'

export const reRender = (state) => {
  ReactDOM.render(
  <BrowserRouter>
    <App state={state} onAddNewsInputChange={onAddNewsInputChange} onAddNewsAuthorChange={onAddNewsAuthorChange} onAddNews={onAddNews}/>
  </BrowserRouter>,
  document.getElementById('root')
);}