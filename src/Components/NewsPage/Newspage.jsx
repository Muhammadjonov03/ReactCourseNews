import React from 'react'
import style from './NewsPage.module.css'
const NewsPage = (props) => {
  return (
    <div className={style.newsPageContainer}>
      <ul> 
        {
          props.news.map(newsItem => (
            <li>
              <p>{newsItem.title}</p>
              <span>{newsItem.date}</span> <span>{newsItem.author}</span>
            </li>

          ))
        }
      </ul>
    </div>
  )
}

export default NewsPage