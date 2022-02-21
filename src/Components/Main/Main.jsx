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
    <Header headerData={props.store.getState().header}
            profilePopupVisible={props.store.getState().profilePopupVisible}
            onProfilePopupToggledActionCreator={props.onProfilePopupToggledActionCreator}
            dispatch={props.dispatch}
            />
    <div className={`container `}>
    <Navbar/>
    <Routes>
        <Route path="/" 
        element={<NewsPage news={props.store.getState().news}/>}/>
        <Route path="/addNews" element={<AddNews 
        addNewsInputTitle={props.store.getState().addNewsInputTitle} 
        addNewsActionCreator={props.addNewsActionCreator}
        onNewsTitleInputChangeActionCreator={props.onNewsTitleInputChangeActionCreator}
        dispatch={props.dispatch}/>}
        />
    </Routes> 
    </div>
  </>
  )
}
export default Main