import React from "react";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle text-emphasis-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
