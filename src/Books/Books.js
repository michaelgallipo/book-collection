import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Books = props => {
  return (
    <Row>
      {props.books
        ? props.books.map((book, index) => {
            return (
              <Col sm={4} key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={{ pathname: "/book", book }}>
                    <img
                      className="card-img-top"
                      src={book.imageUrl}
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
  );
};

export default Books;

// <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
