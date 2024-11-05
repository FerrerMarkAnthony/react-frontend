import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import ListBook from "./components/ListBook";
import BookComponent from "./components/BookComponent";
import Register from "./components/Register";
import Login from "./components/Login";
import { isUserLoggedIn, isAdminUser } from "./api/AuthService";
import UserComponent from "./components/UserComponent";

function App() {
  const isAdmin = isAdminUser();

  function AuthenticatedRoute({ children, adminOnly = false }) {
    const isAuth = isUserLoggedIn();

    if (!isAuth) {
      return <Navigate to="/login" />;
    }

    if (adminOnly && !isAdmin) {
      return <Navigate to="/home" />;
    }

    return children;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ADMIN ROUTE */}
          <Route
            path="/"
            element={
              <AuthenticatedRoute adminOnly={true}>
                <ListBook />
              </AuthenticatedRoute>
            }
          ></Route>

          <Route
            path="/add-book"
            element={
              <AuthenticatedRoute adminOnly={true}>
                <BookComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          <Route
            path="/update-book/:id"
            element={
              <AuthenticatedRoute adminOnly={true}>
                <BookComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          {/* USER ROUTE */}
          <Route
            path="/home"
            element={
              <AuthenticatedRoute adminOnly={false}>
                <Hero />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/details"
            element={
              <AuthenticatedRoute adminOnly={false}>
                <BookDetails />
              </AuthenticatedRoute>
            }
          ></Route>

          <Route
            path="/books"
            element={
              <AuthenticatedRoute adminOnly={false}>
                <Books />
              </AuthenticatedRoute>
            }
          ></Route>

          {/* OPEN TO ALL */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
