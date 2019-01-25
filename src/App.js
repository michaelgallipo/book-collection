import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []}
  }

  authorSubmit = e => {
    e.preventDefault();
    const author = e.target.elements.author.value;
    console.log(author);
    this.getBookData(author);
  };

  getBookData = (author) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
      .then(response => {
        console.log(response.data)
        this.setState({books: response.data.items})
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
          {this.state.books.map(book => <h3>{book.volumeInfo.title}</h3>)}
        </header>
      </div>
    );
  }
}

export default App;
