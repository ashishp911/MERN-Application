import React from "react";
import "./signup.css";
const Signup = () => {
  const borderStyles = {
    border: "3px solid rgba(0, 0, 0, 0.3)",
  };
  return (
    <>
      <div className="container my-4">
        <h1>Registration Page</h1>
        <form className="mt-3" id="register-form">
          <label>
            Name:
            <input
              type="text"
              style={borderStyles}
              placeholder="Enter your name"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              style={borderStyles}
              placeholder="Enter your email"
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              style={borderStyles}
              placeholder="Enter your phone-number"
            />
          </label>
          <br />
          <label>
            Work:
            <input
              type="text"
              style={borderStyles}
              placeholder="Enter your profession"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              style={borderStyles}
              placeholder="Enter password"

              // value={password}
              // onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              style={borderStyles}
              placeholder="Confirm password"

              // value={confirmPassword}
              // onChange={handleConfirmPasswordChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
