import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let { title, desc, imgUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img src="{imgUrl}" className="card-img-top" alt="{title}" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
