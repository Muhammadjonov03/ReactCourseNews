export const ADD_NEWS_ACTION_TYPE = 'ADD_NEWS';
export const ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE = 'ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE' 
export const onNewsTitleInputChangeActionCreator = (text) => {
  return { type: ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE, text}
}
export const addNewsActionCreator = () => {
  return { type: ADD_NEWS_ACTION_TYPE}
}


const newsReducer = (state, action) => {
  switch(action.type) {
    case ADD_NEWS_ACTION_TYPE: 
    const newsItem = {
      title: state.addNewsInputTitle,
      date: '15.02.2022',
      author: 'Mashxurbek'
    }
    state.allNews.push(newsItem)
    state.addNewsInputTitle = ''
    return state
    case ON_NEWS_TITLE_INPUT_CHANGED_ACTION_TYPE: 
    state.addNewsInputTitle =  action.text
    return state
    default: return state
  }
}


export default newsReducer