import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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

	return (
		<Container style={{ marginTop: "25px" }}>
			<Row>
				{book ? (
					<>
						<Col sm={2}>
							<img src={imageUrl} alt="No Image Found" />
						</Col>
						<Col sm={{ span: 9, offset: 1 }}>
							<h4>
								{title}, by {author}
							</h4>
							<h6>{description}</h6>
							<h6>{pageCount} pages</h6>
							<h6>{publishedDate}</h6>
							<br />
							<button onClick={openGoogle(googleLink)}>
								Click to go to Google Books
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
var openGoogle = e => {
	window.open(e.googleLink);
};

export default BookInfo;
