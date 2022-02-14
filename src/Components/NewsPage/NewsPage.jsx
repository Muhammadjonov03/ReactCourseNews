import React from 'react'
import style from './NewsPage.module.css'
const NewsPage = (props) => {
  const newsItems = props.newsList.map(news => {
    return (
      <li >
          { news.title }
          <p>{ news.author}</p>
          <p>{ news.date}</p>
        </li>
    )
  })
  console.log(newsItems);
  return (
    <div className={style.newsContainer}>
      <ul>

        {
          newsItems
        }

      </ul>
    </div>
  )
}

export default NewsPage