import React from "react";

const BookInfo = props => {
  const book = props.location.book;
  const { title, imageUrl, author, description, publishedDate } = book;
  return (
    <div>
      {book ? (
        <>
          <div>
            <img src={imageUrl} alt="No Image Found" />
          </div>
          <div>
            <p>
              {title}, by {author}
            </p>
            <p>{description}</p>
            <p>{publishedDate}</p>
          </div>
        </>
      ) : (
        "Error rendering book info"
      )}
    </div>
  );
};

export default BookInfo;
