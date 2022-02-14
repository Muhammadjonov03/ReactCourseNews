import React from 'react';
import Main from './Components/Main/Main';
import './app.css'
const App = (props) => {
  return <div>
  <Main 
  onAddNews={props.onAddNews}
  state={props.state} 
  onAddNewsAuthorChange={props.onAddNewsAuthorChange}
  onAddNewsInputChange={props.onAddNewsInputChange}/>
</div>
};

export default App;
