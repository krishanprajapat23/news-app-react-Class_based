import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <div>News

        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}

export default News