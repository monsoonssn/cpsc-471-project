import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';



const AgentProfile = () => (
  <div className="agentProfile">
    <div className="agentProfile_content">
      <h1>Your Profile</h1>
      <Typography>Name: AJohn Smith</Typography>
      <p>Name: AJohn Smith</p>
      <p>Phone Number: (555) 555 - 5555</p>
      <p>Email: john.smith@ucalgary.ca</p>
      <p>City: Calgary</p>
      <div className="agentProfile_btns">
        <Link to="/editProfile">
          <Button label="Edit" />
        </Link>

      </div>
    </div>
  </div>
);



export default AgentProfile;
