// import React from 'react'
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    login_email: "",
    login_password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Sending data to backend using fetch API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { login_email, login_password } = userData;
    const res = await fetch("/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login_email, password: login_password }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Registration failed");
    } else {
      window.alert("User logged in  successfully");
      console.log("User logged in successfully");
      navigate("/")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              method="POST"
              // onSubmit={handleSubmit}
              sx={{ mt: 1, width: "50%" }}
            >
              <TextField
                label="Email Address"
                multiline
                rows={1}
                InputLabelProps={{
                  style: { marginLeft: "1px" },
                  height: "25px",
                }}
                margin="normal"
                required
                fullWidth
                type="email"
                id="login_email"
                name="login_email"
                autoComplete="off"
                autoFocus
                value={userData.login_email}
                onChange={handleInput}
              />
              <TextField
                label="Password"
                rows={1}
                InputLabelProps={{
                  style: { marginLeft: "1px" },
                  height: "25px",
                }}
                margin="normal"
                required
                fullWidth
                name="login_password"
                type="password"
                id="login_password"
                autoComplete="new-password"
                value={userData.login_password}
                onChange={handleInput}
              />
              <Button
                type="submit"
                name="signin"
                id="signin"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
