import React from "react";
import style from './Main.module.css'
import { Link, Routes } from 'react-router-dom';
import './Main'
import Header from "../Header/Header";
import { Route } from 'react-router-dom';
import NewsPage from "../NewsPage/Newspage";
import AddNews from './../AddNews/AddNews';
import Navbar from './../Navbar/Navbar';

const Main = (props) => {
  return (<>
    <Header weatherData={props.store.getState().weatherData} 
            breakingNews={props.store.getState().breakingNews} 
            date={props.store.getState().date}
            profilePopupVisible={props.store.getState().profilePopupVisible}
            toggleProfilePopup={props.store.toggleProfilePopup.bind(props.store)}
            />
    <div className={`container `}>
    <Navbar/>
    <Routes>
        <Route path="/" 
        element={<NewsPage news={props.store.getState().news}/>}/>
        <Route path="/addNews" element={<AddNews addNewsInputTitle={props.store.getState().addNewsInputTitle} 
        onNewsTitleInputChange={props.store.onNewsTitleInputChange.bind(props.store)} addNews={props.store.addNews.bind(props.store)}/>}/>
    </Routes> 
    </div>
  </>
  )
}
export default Main