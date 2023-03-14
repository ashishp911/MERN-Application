import React from "react";

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      fontFamily: "Roboto, sans-serif",
      textAlign: "center",
      backgroundColor: "#bee7f8",
    },
    heading: {
      fontSize: "5rem",
      margin: 0,
      padding: 0,
      color: "#333",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to my MERN project</h1>
    </div>
  );
};

export default Home;
