import React from 'react';
import Main from './Components/Main/Main';
import './app.css'
const App = (props) => {
  return <div>
  <Main store={props.store} 
  dispatch={props.dispatch} 
  addNewsActionCreator={props.addNewsActionCreator}
  onProfilePopupToggledActionCreator={props.onProfilePopupToggledActionCreator}
  onNewsTitleInputChangeActionCreator={props.onNewsTitleInputChangeActionCreator}
  />
</div>
};

export default App;
