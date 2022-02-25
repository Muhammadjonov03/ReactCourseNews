import React from "react";
import style from './Main.module.css'
import { Link, Routes } from 'react-router-dom';
import './Main'
import Header from "../Header/Header";
import { Route } from 'react-router-dom';
import NewsPage from "../NewsPage/Newspage";
import AddNews from './../AddNews/AddNews';
import Navbar from './../Navbar/Navbar';
import Profile from "../Profile/Profile";

const Main = (props) => {
  debugger
  return (<>
    <Header headerData={props.store.getState().header}
            profilePopupVisible={props.store.getState().header.profilePopupVisible}
            onProfilePopupToggledActionCreator={props.onProfilePopupToggledActionCreator}
            dispatch={props.dispatch}
            />
    <div className={`container `}>
    <Navbar/>
    <Routes>
        <Route path="/" 
        element={<NewsPage news={props.store.getState().news}/>}/>
        <Route path="/addNews" element={<AddNews 
        addNewsInputTitle={props.store.getState().news.addNewsInputTitle} 
        addNewsActionCreator={props.addNewsActionCreator}
        onNewsTitleInputChangeActionCreator={props.onNewsTitleInputChangeActionCreator}
        dispatch={props.dispatch}/>}
        />
        <Route path='/profile' element={<Profile/>}/>
    </Routes> 
    </div>
  </>
  )
}
export default Main