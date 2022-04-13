import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import "../styles/signup.css";

const elevation = 10;

const Signup = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        elevation={elevation}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4">
          Sign Up
        </Typography>
        <SignUpForm />
      </Paper>
    </Container>
  );
};

export default Signup;
