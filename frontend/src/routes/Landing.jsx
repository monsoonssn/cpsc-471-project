import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/landing.css";

const Landing = () => (
  <div className="landing">
    <div className="landing-content">
      <Typography variant="h1">Real Estate App</Typography>
      <div className="landing-btns">
        <Link to="/signup">
          <Button variant="contained">Sign up</Button>
          {/* <Button label="Sign up" /> */}
        </Link>
        <Link to="/login">
          <Button variant="contained">Log in</Button>
          {/* <Button label="Log in" /> */}
        </Link>
      </div>
    </div>

    <Footer />
  </div>
);

export default Landing;
