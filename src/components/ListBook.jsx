import React, { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../api/BookApi";
import { useNavigate } from "react-router-dom";

const ListBook = () => {
  const [Books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listBooks();
  }, []);

  function listBooks() {
    getAllBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addNewBook = () => {
    navigate("/add-book");
  };

  const updateBook = (id) => {
    navigate(`/update-book/${id}`);
  };

  function removeBook(id) {
    deleteBook(id)
      .then((response) => {
        listBooks();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2>List of Books</h2>
      <button className="btn btn-primary mb-2" onClick={addNewBook}>
        Add Book
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Price</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.description}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.borrowed ? "Not Available" : "Available"}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => updateBook(book.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeBook(book.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBook;
