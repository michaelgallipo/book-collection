import React from 'react';

const Books = (props) => {
	
  return (
    <div>
      <ul>{props.books ? props.books.map((book, index) => {
            return <li key={index}>{book.title}, by {book.author} </li>;
          }) : 'no books found'}
      </ul>
    </div>
  )
};



export default Books;