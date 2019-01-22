import React, { Component } from "react";
import "./App.css";

class App extends Component {
  authorSubmit = e => {
    e.preventDefault();
    const author = e.target.elements.author.value;
    console.log(author);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Book Collection</h2>

          <form onSubmit={this.authorSubmit}>
            <div className="row justify-content-lg-center" id="data-entry">
              <input
                id="author"
                class="form-control form-control-lg col-lg-6"
                type="text"
                name="author"
                placeholder="Enter Author"
              />
            </div>
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
