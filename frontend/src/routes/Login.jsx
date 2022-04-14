import { Container, Paper, Typography } from "@mui/material";
import React from "react";
// import Footer from "../components/Footer";
import LoginForm from "../components/forms/LoginForm";

const elevation = 10;

const Login = () => (
  <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper
      elevation={elevation}
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography component="h1" variant="h4">
        Log in
      </Typography>
      <LoginForm />
    </Paper>
  </Container>
);

export default Login;
