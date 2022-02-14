import React from 'react'
import style from './AddNews.module.css'
const AddNews = (props) => {
  const onNewsTitleChange = (e) => {
    props.onAddNewsInputChange(e.target.value)
  }
  const onNewsAuthorChange = (e) => {
    props.onAddNewsAuthorChange(e.target.value)
  }
  
  const newsInputTitleRef = React.createRef()
  const newsInputAuthorRef = React.createRef()

  const onAddNews = () => {
    props.onAddNews(newsInputTitleRef.current.value, newsInputAuthorRef.current.value)
  }

  return (
    <div className={style.addNewsContainer}>
      <input
      ref={newsInputTitleRef} 
      onChange={onNewsTitleChange}
      value={props.addNewsInput}
      type="text" 
      placeholder='News title'/>
      <br/>
      <input
      ref={newsInputAuthorRef} 
      onChange={onNewsAuthorChange}
      value={props.addNewsInputAuthor}
      type="text" 
      placeholder='News Author'/>
      <br />
      <button
      onClick={onAddNews}
      >Add news </button>
    </div>
  )
}

export default AddNews