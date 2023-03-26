import React from "react";
import logo from "../Images/Patil_Logo.jpg"
import logo2 from "../Images/Patil_Logo2.jpg"
import logo3 from "../Images/Patil_Logo3.jpg"
import {Link} from "react-router-dom";
import { userContext } from "../App";
import { useContext } from "react";


const Navbar = () => {
  const { state, dispatch } = useContext(userContext);

  const RenderMenu = () => {
    if (state){
      return(
        <>
          <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
        </>
      )
    }
    else{
      return (
        <>
        <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/signup">
                  Register
                </Link>
              </li>
            </ul>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={logo3} alt=" logo" />
          </Link>
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
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
