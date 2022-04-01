import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Client = () => (
  <div className="client">
    <div className="client_content">
      <h1>Hello! </h1>
      <div className="client_btns">
        <Link to="/Listing">
          <Button label="Add a Listing" />
        </Link>
        <Link to="/Requirements">
          <Button label="Add Requirements" />
        </Link>
      </div>
    </div>
  </div>
);
export default Client;
