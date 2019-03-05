import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Books from "./Books";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    console.log(props.searchTerm);

    if (props.searchTerm !== undefined) {
      this.getBookData(props.searchTerm);
    }
  }

  authorSubmit = e => {
    e.preventDefault();
    const author = e.target.elements.author.value;
    this.getBookData(author);
    this.props.booksSearched(author);
  };

  getBookData = author => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
      .then(response => {
        const books = response.data.items.map(book => {
          const volumeInfo = book.volumeInfo;
          return {
            title: volumeInfo.title,
            author: volumeInfo.authors[0],
            imageUrl: volumeInfo.imageLinks
              ? volumeInfo.imageLinks.smallThumbnail
              : null,
            description: volumeInfo.description,
            publishedDate: volumeInfo.publishedDate,
            pageCount: volumeInfo.pageCount,
            categories: volumeInfo.categories
          };
        });
        this.setState({ books: books });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book Collection</h1>

          <Form onSubmit={this.authorSubmit}>
            <Row className="justify-content-lg-center" id="data-entry">
              <Form.Control
                id="author"
                type="text"
                name="author"
                placeholder="Enter Author"
              />
            </Row>
            <button style={{ marginTop: "5px" }}>Submit</button>
          </Form>
        </header>
        <Books books={this.state.books} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  booksSearched: author => dispatch({ type: "BOOKS_SEARCHED", payload: author })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
