import React from "react";
import Footer from "../components/Footer";
// import Button from "../components/Button";
// import Button from "antd/lib/button";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import "antd/dist/antd.css";
import "../styles/landing.css";

const Landing = () => (
  <div className="landing">
    <div className="landing-content">
      <h1>Real Estate App</h1>
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
