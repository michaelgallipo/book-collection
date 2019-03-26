import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const BookInfo = props => {
  const book = props.location.book;
  const {
    title,
    imageUrl,
    author,
    description,
    publishedDate,
    pageCount,
    googleLink
  } = book;

  // const openGoogle = e => {
  // 	window.open(e.googleLink);
  // };

  return (
    <Container style={{ marginTop: "25px" }}>
      <Link style={{ marginBottom: "15px" }} to={{ pathname: "/" }}>
        Back to Books Index
      </Link>

      <Row>
        {book ? (
          <>
            <Col sm={2}>
              <img src={imageUrl} alt="No Cover Found" />
            </Col>
            <Col sm={{ span: 9, offset: 1 }}>
              <h4>
                {title}, by {author}
              </h4>
              <h6>{description}</h6>
              <h6>{pageCount} pages</h6>
              <h6>{publishedDate}</h6>
              <br />
              <button>
                <a href={googleLink} target="_blank">
                  Click to go to Google Books
                </a>
              </button>
            </Col>
          </>
        ) : (
          "Error rendering book info"
        )}
      </Row>
    </Container>
  );
};

export default BookInfo;
