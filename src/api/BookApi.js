import axios from "axios";
import { getToken } from "./AuthService";

const REST_API = "http://localhost:8080/api/books";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getAllBooks = () => {
  return axios.get(REST_API);
};

export const getBook = (id) => axios.get(REST_API + "/" + id);

export const saveBook = (book) => axios.post(REST_API, book);

export const updateBook = (id, todo) => axios.put(REST_API + "/" + id, todo);

export const deleteBook = (id) => axios.delete(REST_API + "/" + id);
