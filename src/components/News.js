import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container-md container-fluid my-3">
        <h2 className="text-center">NewsApp - Top Headlines</h2>
        <div className="row justify-content-around g-2">
          <div className="col-md-4 col-sm-6">
            <NewsItem title="myTitle" desc="myDesc"/>
          </div>
          <div className="col-md-4 col-sm-6">
            <NewsItem title="myTitle" desc="myDesc"/>
          </div>
          <div className="col-md-4 col-sm-6">
            <NewsItem title="myTitle" desc="myDesc"/>
          </div>
          <div className="col-md-4 col-sm-6">
            <NewsItem title="myTitle" desc="myDesc"/>
          </div>
        </div>
        1982f1087a7741e39dcd68ca30f43f11
      </div>
    );
  }
}

export default News;
