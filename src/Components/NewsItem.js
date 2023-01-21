import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card md-4">
          <span
            className="badge bg-danger"
            style={{
              display: "flex",
              right: "0",
              justifyContent: "flex-end",
              position: "absolute",
            }}
          >
            {source != null ? source : "Unknown"}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              imageUrl != null
                ? imageUrl
                : "https://st.depositphotos.com/2288675/2453/i/600/depositphotos_24539893-stock-photo-breaking-news-daily-newspaper-headline.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <footer className="blockquote-footer my-3">
              By {author != null ? author + " " : "Unknown "}
              <cite title="Source Title">
                at {new Date(date).toUTCString()}
              </cite>
            </footer>

            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary bg-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
