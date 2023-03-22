import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../Images/user.png";
import photo2 from "../Images/user3.png";


const About = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState();

  const callAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setUserData(data)
      if (!response.status === 200) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
      navigate("/login")
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  const styles = {
    container: {
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      backgroundColor: "#bee7f8",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      borderRadius: "1rem",
      backgroundColor: "#f5f5f5",
    },
    box2: {
      display: "block",
      flexDirection: "column",
      justifyContent: "left",
      alignItems: "left",
      padding: "2rem",
      // boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      borderRadius: "1rem",
      backgroundColor: "#f5f5f5",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    paragraph: {
      fontSize: "1.5rem",
      lineHeight: "1.5",
      textAlign: "justify",
    },
  };
  return (
    <>
      <div style={styles.container}>
        <form method="GET">
          <img
            src={photo2}
            alt="No pic"
            style={{ display: "block", margin: "auto" }}
          />
          <div style={styles.box}>
            <p style={styles.paragraph}>
              Hi, my name is Ashish. I'm a FSE based in Buffalo, NY. 
              Lorem ipsum dolor sitamet consectetur adipisicing elit. Laudantium doloribus facere labore tempora eveniet maxime aut officia sunt nihil voluptates
              quod, quaerat, atque mollitia id fugit excepturi accusamus. Exercitationem illum magni eum.
              My Contact details are as follows
            </p>
            <br />
          </div>
          <div style={styles.box2}>
            <p style={styles.paragraph}>Contact details</p>
            <ul>
              <li style={styles.paragraph}>Name : </li>
              <li style={styles.paragraph}>Email Id : </li>
              <li style={styles.paragraph}>Profession : </li>
              <li style={styles.paragraph}>Phone Number : </li>

            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
