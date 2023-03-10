import React from "react";
import "./signup.css";
const Signup = () => {
  return (
    <>
      <div className="container my-5">
        <h1>Registration Page</h1>
        <form className="mt-5">
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" />
          </label>
          <br />
          <label>
            Work:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              // value={password}
              // onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
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
