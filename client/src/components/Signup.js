import React from "react";
import "./signup.css";
import {Link,} from "react-router-dom";
const Signup = () => {
  const borderStyles = {
    border: "3px solid rgba(0, 0, 0, 0.3)",
  };
  return (
    <>
      <div className="container my-4">
        <h1>REGISTER HERE</h1>
        <form className="mt-5" id="register-form">
          <div className="row">
            <div className="col-5">
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                style={borderStyles}
                placeholder="Enter your name"
              />
            </div>
            <div className="col-5">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                style={borderStyles}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-5">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="off"
                style={borderStyles}
                placeholder="Enter your phone-number"
              />
            </div>
            <div className="col-5">
              <label>Work</label>
              <input
                type="text"
                name="work"
                id="work"
                autoComplete="off"
                style={borderStyles}
                placeholder="Enter your profession"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-5">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                style={borderStyles}
                placeholder="Enter password"

                // value={password}
                // onChange={handlePasswordChange}
              />
            </div>
            <div className="col-5">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                style={borderStyles}
                placeholder="Confirm password"
                // value={confirmPassword}
                // onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <input type="submit" value="REGISTER" name="signup" id="signup"/>
          </div>
          <div className="row mt-2">
          <Link className="nav-link active" to="/login" id="alreadyRegistered">
                  I'm already registered
            </Link>
          </div>

        </form>
      </div>
    </>
  );
};

export default Signup;
