import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => (
  <div className="landing">
    <div className="landing_content">
      <h1>Real estate thing</h1>
      <div className="landing_btns">
        <Link to="/signup">
          <Button label="Sign up" />
        </Link>
        <Link to="/login">
          <Button label="Log in" />
        </Link>
      </div>
    </div>

    <Footer />
  </div>
);

export default Landing;
