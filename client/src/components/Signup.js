// import React from "react";
// import "./signup.css";
// import { Link } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Signup = () => {
  const navigate = useNavigate();
  // const borderStyles = {
  //   border: "3px solid rgba(0, 0, 0, 0.3)",
  // };

  // useState to get all data
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:"",
  })

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]:value});
  }

  // Sending data(user) to backend now


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Object de-structuring
    const { name, email, phone, work, password, cpassword } = user
    const res = await fetch('/register', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify({name, email, phone, work, password, cpassword})
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Registration failed");
      console.log("Registration failed");
    }
    else{
      window.alert("Registration successful");
      console.log("Registration successful");

      // Once registration is succesful, user should go to /login
      navigate("/login")
    }

  };

  return (
    <>
      {/* <div className="container my-4">
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
      </div> */}

      {/*  Material UI code below  */}
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
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              method="POST"
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    name="name"
                    id="name"
                    type="text"
                    autoComplete="off"
                    required
                    fullWidth
                    autoFocus
                    value={user.name}
                    onChange = {handleInputs}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    id="phone"
                    type="number"
                    autoComplete="off"
                    required
                    fullWidth
                    autoFocus
                    value={user.phone}
                    onChange = {handleInputs}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Profession"
                    name="work"
                    id="work"
                    autoComplete="off"
                    required
                    fullWidth
                    autoFocus
                    type="text"
                    value={user.work}
                    onChange = {handleInputs}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={user.email}
                    onChange = {handleInputs}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={user.password}
                    onChange = {handleInputs}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Confirm Password"
                    name="cpassword"
                    id="cpassword"
                    type="password"
                    autoComplete="new-password"
                    value={user.cpassword}
                    onChange = {handleInputs}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Signup;
