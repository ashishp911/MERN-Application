import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
    const res = await fetch('/register', {
      method:"POST",
      credentials: 'include',
      headers:{
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify(user)
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Registration failed");
      console.log("Registration failed");
    }
    else{
      window.alert("User Registred Successfully");
      console.log("User Registred Successfully");

      // Once registration is succesful, user should go to /login
      navigate("/login")
    }

  };

  return (
    <>
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
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Signup;
