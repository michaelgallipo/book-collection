import React from "react";

const Books = props => {
  return (
    <div>
      {props.books
        ? props.books.map((book, index) => {
            return (
              <div key={index}>
                <img src={book.imageUrl} alt="No Image Found" />
                {book.title}, by {book.author}
              </div>
            );
          })
        : "no books found"}
    </div>
  );
};

export default Books;
