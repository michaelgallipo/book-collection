import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Books = props => {
  if (props.books.length > 0) {
    setTimeout(() => {
      const element = document.getElementById("bookList");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }, 1000);
  }

  return (
    <div id="bookList">
      <Row>
        {props.books.length > 0
          ? props.books.map((book, index) => {
              const imageUrl = book.imageUrl
                ? book.imageUrl
                : "http://sbr.redcom.in/books/sites/default/files/default_images/no-cover-placeholder.jpg";
              return (
                <Col sm={4} key={index}>
                  <div
                    className="card"
                    style={{ width: "18rem", border: "none" }}
                  >
                    <Link to={{ pathname: "/book", book }}>
                      <img
                        className="card-img-top"
                        src={imageUrl}
                        alt="No Image Found"
                      />
                    </Link>
                    <div className="card-body">
                      {book.title}, by {book.author}
                    </div>
                  </div>
                </Col>
              );
            })
          : "no books found"}
      </Row>
    </div>
  );
};

export default Books;

// <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
