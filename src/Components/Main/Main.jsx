import React from "react";
import './Main.css'
import { Link, Routes } from 'react-router-dom';
import './Main'
import Header from "../Header/Header";
import { Route } from 'react-router-dom';
import NewsPage from "../NewsPage/Newspage";
import AddNews from './../AddNews/AddNews';

const Main = (props) => {
  return (<>
    <Header weatherData={props.state.weatherData} breakingNews={props.state.breakingNews} date={props.state.date}/>
    <Link to="/">Home</Link>
    <Link to="/addNews">Add News</Link>
    <Routes>
        <Route path="/" element={<NewsPage news={props.state.news}/>}/>
        <Route path="/addNews" element={<AddNews addNewsInputTitle={props.state.addNewsInputTitle} 
        onNewsTitleInputChange={props.onNewsTitleInputChange} addNews={props.addNews}/>}/>
    </Routes> 
  </>
  )
}
export default Main