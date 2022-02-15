import React from "react";
import './Main.css'

import './Main'
import Header from "../Header/Header";
const Main = (props) => {
  return (<>
    <Header weatherData={props.state.weatherData} breakingNews={props.state.breakingNews} date={props.state.date}/>
  </>
  )
}
export default Main