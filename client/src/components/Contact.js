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

const theme = createTheme();

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted");
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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 4, width: 700 }}
            >
              <TextField
                label="Name"
                name="name"
                id="name"
                autoComplete="off"
                required
                fullWidth
                autoFocus
                value={name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
              />
          
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                multiline
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br />
      <footer className="bg-light text-center mt-3">
        <div className="container p-2">
          <section className>
            <div className="row">
              <div className="col-4">
                <h2>Phone</h2>
                <h5>716-999-9990</h5>
              </div>
              <div className="col-4">
                <h2>Email</h2>
                <h5>xyz@patil.com</h5>
              </div>
              <div className="col-4">
                <h2>Address</h2>
                <h5>Pune, MH</h5>
              </div>
            </div>
          </section>
        </div>
        {/* Copyright */}
        <div className="text-center p-2" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-dark" href="https://en.wikipedia.org/wiki/April_Fools%27_Day">xyzpatil.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Contact;
