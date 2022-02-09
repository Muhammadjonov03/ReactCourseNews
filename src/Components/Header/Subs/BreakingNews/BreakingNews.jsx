import React, { Component } from 'react';
import './BreakingNews.css'

class BreakingNews extends Component {
  render() {
    return (
      <div className="breaking-news">
      <p className="breaking-news-header">
        Breaking News
      </p>
      <p className="breaking-news-text" id={this.props.breakingNews.id}>{this.props.breakingNews.title}</p>
    </div>
    );
  }
}

export default BreakingNews;
