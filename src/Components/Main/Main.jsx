import React from "react";
import './Main.css'

import './Main'
import Header from "../Header/Header";
import NewsPage from "../NewsPage/NewsPage";
import AddNews from './../AddNews/AddNews';
import { Link, Route, Routes } from "react-router-dom";
const Main = (props) => {
  debugger
  return (<>
    <Header 
    weatherData={props.state.weatherData} 
    date={props.state.date} 
    breakingNews={props.state.breakingNews}/>

    <Link to="/addPost">AddPost</Link>
    <br />
    <Link to="/">Main Page</Link>
    
    <Routes>
      <Route path="/" element={<NewsPage newsList={props.state.news}/>}/>
      <Route path="/addPost" element={<AddNews 
      onAddNews={props.onAddNews}
      addNewsInputAuthor={props.state.addNewsInputAuthor}
      addNewsInput={props.state.addNewsInputTitle}
      onAddNewsInputChange={props.onAddNewsInputChange}
      onAddNewsAuthorChange={props.onAddNewsAuthorChange}
      />}/>
    </Routes>
  </>
  )
}
export default Main