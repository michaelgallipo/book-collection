import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Books = props => {
  return (
    <div>
      {props.books
        ? props.books.map((book, index) => {
            return (
              <div key={index}>
                <Link to={{ pathname: "/book", book }}><img src={book.imageUrl} alt="No Image Found"/>
                </Link>
                {book.title}, by {book.author}
              </div>
            );
          })
        : "no books found"}
    </div>
  );
};

export default Books;
