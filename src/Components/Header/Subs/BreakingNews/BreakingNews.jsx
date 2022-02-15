import React from 'react';
import './BreakingNews.css'
const BreakingNews = (props) => {
  return (
    <div className="breaking-news">
      <p className="breaking-news-header">
        Breaking News
      </p>
      <p className="breaking-news-text">{props.breakingNews.text}</p>
    </div>
  )
};

export default BreakingNews;
