import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props
    return (
      <div className="card" >
        <img src={imageUrl}  className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
            ReadMore
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
