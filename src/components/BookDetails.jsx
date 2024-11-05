// BookDetail.js
import React from "react";

const BookDetails = ({ book }) => {
  if (!book) return <div>No book selected.</div>;

  return (
    <div className="container mt-4">
      <div className="card border-light shadow-sm">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text text-muted">{book.author}</p>
          <p className="card-text">
            Additional details about the book can go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
