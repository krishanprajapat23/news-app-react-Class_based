import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, time } = this.props;
    //css
    const imgSet = {
      aspectRatio: "16/9",
      objectFit: "contain"
    };
    // console.log(urlToImage)
    return (
      <div className="h-100">
        <div className="card h-100">
          <img
            src={
              !imgUrl
                ? `https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80`
                : imgUrl
            }
            className="card-img-top"
            style={imgSet}
            alt={title}
          />
          <div className="card-body">
            <small>{time.replace(/T|Z/gi, " ")}</small>
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">{desc.slice(0, 150) + "..."}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
