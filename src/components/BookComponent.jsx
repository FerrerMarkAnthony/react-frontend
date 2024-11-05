import React from "react";
import { useState, useEffect } from "react";
import { saveBook, updateBook, getBook } from "../api/BookApi";
import { useNavigate, useParams } from "react-router-dom";

const BookComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [borrowed, setBorrowed] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const saveOrUpdateBook = (e) => {
    e.preventDefault();
    console.log();

    const book = { title, description, author, price, borrowed };
    console.log(book);

    if (id) {
      updateBook(id, book)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      saveBook(book)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Book</h2>;
    } else {
      return <h2 className="text-center">Add Book</h2>;
    }
  }

  useEffect(() => {
    if (id) {
      getBook(id)
        .then((response) => {
          console.log(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setPrice(response.data.price);
          setAuthor(response.data.author);
          setBorrowed(response.data.borrowed);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Book Title: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Book Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Author: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Price: </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Borrowed Type: </label>
                <select
                  className="form-control"
                  value={borrowed}
                  name="borrowed"
                  onChange={(e) => setBorrowed(e.target.value)}
                >
                  <option value="false">False</option>
                </select>
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateBook(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
