import React from "react";
import {Link} from "react-router-dom";
import Button from "../components/Button";

const AgentDashboard = () => (
  <div className="agent_dashboard">
    <div className="agent_content">
      <h1>Welcome to your database!</h1>
      <div className="agent_btns">
        <Link to="/Listing">
          <Button label="Add a Listing" />
        </Link>
        <Link to="/Listing">
          <Button label="Edit or Delete a Listing" />
        </Link>
        <Link to="/Client">
          <Button label="Add a Client" />
        </Link>
        <Link to="/Client">
          <Button label="Edit or Delete a Client" />
        </Link>
        <Link to="/Client">
          <Button label="Search for Clients" />
        </Link>
        <Link to="/Listing">
          <Button label="Search for Listings" />
        </Link>
        <Link to="/Appointment">
          <Button label="Appointments" />
        </Link>
      </div>
    </div>
  </div>
);

export default AgentDashboard;
