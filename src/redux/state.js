import sun from "./../assets/img/sun.svg"
import dateIcon from "./../assets/img/clock.svg"
import { reRender } from './../reRender';
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
  addNewsInputTitle: '',
  addNewsInputAuthor: '',
  breakingNews: {
    id: 132,
    title: "Spark chiqarilishi to'xtatildi"
  },
  date:{
    date: getDate(),
    dateIcon
  },
  news: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga et aspernatur voluptatem consequuntur reprehenderit?',
      author: 'B.B. Abraham',
      date: '11.02.2022'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga et aspernatur voluptatem consequuntur reprehenderit?',
      author: 'B.B. Murod',
      date: '11.02.2022'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga et aspernatur voluptatem consequuntur reprehenderit?',
      author: 'B.B. Ismoil',
      date: '11.02.2022'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga et aspernatur voluptatem consequuntur reprehenderit?',
      author: 'B.B. Abror',
      date: '11.02.2022'
    }
]
}


export const onAddNewsInputChange = (text) => {
  state.addNewsInputTitle = text
  reRender(state)
}
export const onAddNewsAuthorChange = (text) => {
  state.addNewsInputAuthor = text
  reRender(state)
}

export const onAddNews = (text, author) => {
  const newItem = {
    id: state.news.lengh + 1,
    title: text,
    author,
    date: new Date().getDate()
  }
  state.news.push(newItem)
  state.addNewsInputAuthor = ''
  state.addNewsInputTitle = ''
  reRender(state)
}
export default state