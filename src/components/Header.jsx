import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout, isAdminUser } from "../api/AuthService";

const Header = () => {
  const isAuth = isUserLoggedIn();
  const navigator = useNavigate;
  const isAdmin = isAdminUser();

  function handleLogout() {
    logout();
    navigator("/login");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-5">
            <a className="navbar-brand" href="#">
              Library
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {isAdmin ? "Admin" : "User"}
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                {!isAuth && (
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                )}

                {!isAuth && (
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                )}
                {isAuth && (
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
