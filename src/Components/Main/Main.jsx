import React from "react";
import './Main.css'

import './Main'
import Header from "../Header/Header";
const Main = (props) => {
  return (<>
    <Header weatherData={props.state.weatherData} date={props.state.date} breakingNews={props.state.breakingNews}/>
  </>
  )
}
export default Main