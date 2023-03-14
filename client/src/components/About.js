import React from "react";
import photo from "../Images/Patil_Image.JPG";
const About = () => {
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
    heading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    paragraph: {
      fontSize: "1.5rem",
      lineHeight: "1.5",
      textAlign: "center",
    },
  };
  return (
    <>
      <div style={styles.container}>
        <img
          src={photo}
          alt="No pic"
          style={{ display: "block", margin: "auto" }}
        />
        <div style={styles.box}>
          <p style={styles.paragraph}>
            Hi, my name is Ashish Patil. I'm a Software Developer based in
            Buffalo, NY. I specialize in Full Stack Web Development and have
            been working in the industry for 1 year. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium doloribus facere labore
            tempora eveniet maxime aut officia sunt nihil voluptates quod,
            quaerat, atque mollitia id fugit excepturi accusamus. Exercitationem
            illum magni eum.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
