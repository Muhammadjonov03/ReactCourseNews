import React from 'react';
import Main from './Components/Main/Main';
import './app.css'
const App = (props) => {
  return <div>
  <Main state={props.state} onNewsTitleInputChange={props.onNewsTitleInputChange} addNews={props.addNews}/>
</div>
};

export default App;
