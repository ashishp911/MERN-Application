import React from "react";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  button: {
    fontSize: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#2daa1a',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
  },
};

const Errorpage = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Error 404!</h1>
          <button style={styles.button}>
          <NavLink to="/">Go back to main Page</NavLink>
        </button>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
