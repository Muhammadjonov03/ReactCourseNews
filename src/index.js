import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import sun from "./assets/img/sun.svg"
import dateIcon from "./assets/img/clock.svg"
const formatMonth = (month) => {
  const monthString = month === 1 
  ? 'January'
  : month === 2 
  ? 'February'
  : month === 3 
  ? 'March'
  : month === 4 
  ? 'April'
  : month === 5 
  ? 'May'
  : month === 6 
  ? 'June'
  : month === 7 
  ? 'July'
  : month === 8 
  ? 'August'
  : month === 9
  ? 'September'
  : month === 10
  ? 'October'
  : month === 11
  ? 'November'
  : 'December'
  
  return monthString
}
const formatDay = (weekDay) => {
  const weekDayString = weekDay === 1 
  ? 'Monday'
  : weekDay === 2 
  ? 'Tuesday'
  : weekDay === 3 
  ? 'Wednesday'
  : weekDay === 4 
  ? 'Thursday'
  : weekDay === 5 
  ? 'Friday'
  : weekDay === 6 
  ? 'Saturday'
  : 'Sunday'
  
  return weekDayString
}

const getDate = () => {
  const weekDay = new Date().getDay()
  const date = new Date().getDate()
  const month = new Date().getMonth() +1
  const year = new Date().getFullYear()
  return `${formatDay(weekDay)}, ${date} ${formatMonth(month)} ${year}`
}
const state = {
  weatherData: {
    weatherDegree: 38,
    location: 'Tashkent',
    weatherIcon: sun
  },
  breakingNews: {
    id: 132,
    title: "Spark chiqarilishi to'xtatildi"
  },
  date:{
    date: getDate(),
    dateIcon
  },
  news: [
    
  ] 
}
ReactDOM.render(
  <App state={state}/>
,
  document.getElementById('root')
);
