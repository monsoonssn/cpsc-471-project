import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ClientProfile = () => (
  <div className="clientProfile">
    <div className="clientProfile_content">
      <h1>Your Profile</h1>
      <p>Name: CJohn Smith</p>
      <p>Type: Buyer</p>
      <p>Phone Number: (555) 555 - 5555</p>
      <p>Email: john.smith@ucalgary.ca</p>
      <p>City: Calgary</p>
      <div className="clientProfile_btns">
        <Link to="/editProfile">
          <Button label="Edit" />
        </Link>

      </div>
    </div>
  </div>
);

export default ClientProfile;
