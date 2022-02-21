import sun from './../assets/img/sun.svg'
import clock from './../assets/img/clock.svg'

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


export const ADD_NEWS_ACTION_TYPE = 'ADD_NEWS';
export const ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE = 'ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE' 
export const PROFILE_POPUP_TOGGLED_ACTION_TYPE = 'PROFILE_POPUP_TOGGLED_ACTION_TYPE' 

  const store = {
    _state: {
      header: {
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
      },
      news: {
        allNews: [
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
      ]
    },
      addNewsInputTitle: '',
      profilePopupVisible: false
    },
    getState() {
      return this._state
    },
    _subscriber() {},
    subscribe(observer) {
      this._subscriber = observer
    },
    dispatch(action) {         // currentReceivedAction ====== Action  ======{type: "ADD_NEWS", text}
      if(action.type === ADD_NEWS_ACTION_TYPE) {
        const newsItem = {
          title: this._state.addNewsInputTitle,
          date: '15.02.2022',
          author: 'Mashxurbek'
        }
        this._state.news.allNews.push(newsItem)
        this._state.addNewsInputTitle = ''
        this._subscriber(this)
      } else if( action.type === ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE) {
        this._state.addNewsInputTitle =  action.text
        this._subscriber(this)
      } else if(action.type === PROFILE_POPUP_TOGGLED_ACTION_TYPE) {
        this._state.profilePopupVisible = !this._state.profilePopupVisible
        this._subscriber(this)
      }
    }
  }

  export default store 

  // ACTION CREATORS
  export const onNewsTitleInputChangeActionCreator = (text) => {
    return { type: ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE, text}
  }
  export const addNewsActionCreator = () => {
    return { type: ADD_NEWS_ACTION_TYPE}
  }

  export const onProfilePopupToggledActionCreator = () => {
    return {type: PROFILE_POPUP_TOGGLED_ACTION_TYPE}
  }