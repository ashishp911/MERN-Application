import React, { useEffect, useState } from "react";

const Home = () => {
  
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  
  const userHome = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHome();
  }, []);


  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      fontFamily: "Pacifico ",
      textAlign: "center",
      backgroundColor: "#bee7f8",
    },
    h1_heading: {
      fontSize: "5rem",
      margin: 0,
      padding: 0,
      color: "#333",
    },
    h2_heading: {
      fontSize: "3rem",
      margin: 0,
      padding: 0,
      color: "#333",
    },

  };
  return (
    <div style={styles.container}>
      <h1 style={styles.h1_heading}>Hello {userName} </h1>
      <h2 style={styles.h2_heading}>{show ? 'Happy to see you back': 'Welcome to my MERN project'}</h2>
    </div>
  );
};

export default Home;
