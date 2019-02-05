import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Books from "./Books"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []}
  }

  authorSubmit = e => {
    console.log("we clicked Submit")
    e.preventDefault();
    const author = e.target.elements.author.value;
    console.log(author);
    this.getBookData(author);
  };

  getBookData = (author) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
      .then(response => {
        console.log(response.data)
        const books = response.data.items.map((book) => {
          return {title: book.volumeInfo.title, author: book.volumeInfo.authors[0], imageUrl: "hi"}
        })
        this.setState({books: books})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Book Collection</h2>

          <form onSubmit={this.authorSubmit}>
            <div className="row justify-content-lg-center" id="data-entry">
              <input
                id="author"
                className="form-control form-control-lg col-lg-6"
                type="text"
                name="author"
                placeholder="Enter Author"
              />
            </div>
            <button>Submit</button>
          </form>
        </header>
        <Books 
        books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
