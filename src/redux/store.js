import sun from './../assets/img/sun.svg'
import clock from './../assets/img/clock.svg'

let subscriber = () => {}

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
const state =  {
    date: {
      dateIcon: clock,
      date: getDate()
    },
    weatherData: {
      weatherDegree: 10,
      location: 'Tashkent',
      weatherIcon: sun
    },
    breakingNews: {
      id: 123,
      text: 'Indonesia says located black box recorders from crashed plane'
    },
    news: [
      {
        title: 'Title',
        date: '15.02.2022',
        author: 'Mashxurbek'
      },
      {
        title: 'Title',
        date: '15.02.2022',
        author: 'Mahmud'
      },
      {
        title: 'Title',
        date: '15.02.2022',
        author: 'Umidjon'
      },
      {
        title: 'Title',
        date: '15.02.2022',
        author: 'Murodjon'
      },
    ],
    addNewsInputTitle: '' 
  }
  export default state

  export const onNewsTitleInputChange = (text) => {
    state.addNewsInputTitle =  text
    subscriber(state)
    console.log(state.addNewsInputTitle);
  }
  export const addNews = (text) => {
    const newsItem = {
      title: text,
      date: '15.02.2022',
      author: 'Mashxurbek'
    }
    state.news.push(newsItem)
    state.addNewsInputTitle = ''
    subscriber(state)
  }


  export const subscribe = (observer) => {
    debugger
    subscriber = observer
  }



  export const store = {
    _state: {
      date: {
        dateIcon: clock,
        date: getDate()
      },
      weatherData: {
        weatherDegree: 10,
        location: 'Tashkent',
        weatherIcon: sun
      },
      breakingNews: {
        id: 123,
        text: 'Indonesia says located black box recorders from crashed plane'
      },
      news: [
        {
          title: 'Title',
          date: '15.02.2022',
          author: 'Mashxurbek'
        },
        {
          title: 'Title',
          date: '15.02.2022',
          author: 'Mahmud'
        },
        {
          title: 'Title',
          date: '15.02.2022',
          author: 'Umidjon'
        },
        {
          title: 'Title',
          date: '15.02.2022',
          author: 'Murodjon'
        },
      ],
      addNewsInputTitle: ''
    },
    _subscriber() {},
    _callSubscriber() {
      this._subscriber(this._state)
    },
    subscribe(observer) {
      debugger
      this._subscriber = observer
    },
    getState() {
      return this._state
    },
    onNewsTitleInputChange(text) {
      state.addNewsInputTitle =  text
      this._callSubscriber(store._state)
    },
    addNews(text) {
      const newsItem = {
        title: text,
        date: '15.02.2022',
        author: 'Mashxurbek'
      }
      state.news.push(newsItem)
      state.addNewsInputTitle = ''
      this._callSubscriber(store._state)
    },
    
  }