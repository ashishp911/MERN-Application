import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const theme = createTheme();

const Contact = () => {
  //  Saving message to a state.
  // const [userMessage, setUserMessage] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      // console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (!response.status === 200) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // Sending the data to backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    // console.log(userData);
    const {name, email, phone, message} = userData
    const response = await fetch('/contact', {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, phone, message}),
    })
    const data = await response.json()
    if(!data){
      console.log("Message not sent");
    }
    else{
      window.alert("Message sent successfully")
      setUserData({...userData, message:""})
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Box
              component="form"
              id="contact-form"
              noValidate
              sx={{ mt: 4, width: 700 }}
              method="POST"
            >
              <TextField
                label="Name"
                name="name"
                id="contact_form_name"
                autoComplete="off"
                required
                fullWidth
                autoFocus
                type="text"
                value={userData.name}
                onChange={handleInputs}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                id="contact_form_email"
                autoComplete="email"
                autoFocus
                value={userData.email}
                type="email"
                onChange={handleInputs}
              />
              <TextField
                label="Phone Number"
                name="phone"
                id="contact_form_pnumber"
                autoComplete="off"
                required
                fullWidth
                autoFocus
                value={userData.phone}
                type="number"
                onChange={handleInputs}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                multiline
                name="message"
                rows={6}
                value={userData.message}
                type="text"
                onChange={handleInputs}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br />
      <footer className="bg-light text-center mt-4">
        <div className="container p-2">
          <section className>
            <div className="row">
              <div className="col-4">
                <h4>Phone</h4>
                <h5>{userData.phone}</h5>
              </div>
              <div className="col-4">
                <h4>Email</h4>
                <h5>{userData.email}</h5>
              </div>
              <div className="col-4">
                <h4>Address</h4>
                <h5>Pune, MH</h5>
              </div>
            </div>
          </section>
        </div>
        {/* Copyright */}
        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a
            className="text-dark"
            href="https://en.wikipedia.org/wiki/April_Fools%27_Day"
          >
            xyzpatil.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
