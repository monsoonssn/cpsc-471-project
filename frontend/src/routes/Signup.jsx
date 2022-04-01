import React from "react";
import "../styles/signup.css";
import SignUpForm from "../components/forms/SignUpForm";

const Signup = () => (
  <div className="signup-container back-shade br-15">
    <h2 className="signup-title">Sign Up</h2>
    <SignUpForm />
  </div>
);

export default Signup;
