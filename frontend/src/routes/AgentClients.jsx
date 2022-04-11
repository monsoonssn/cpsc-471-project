import React from "react";
import ClientPreview from "../components/ClientPreview";

const AgentClients = () => (
  <div className="agent-clients">
    <h2>Your Clients</h2>
    <div className="agent-clients-info">
      <ClientPreview
        fname="Will "
        lname="Smith "
        phone="4034444444"
        email="abc@xyz.com "
      />
      <ClientPreview
        fname="Billy "
        lname="Williams "
        phone="3330002222"
        email="abc@xyz.com "
      />
      <ClientPreview
        fname="Alex "
        lname="Ross "
        phone="3233333333"
        email="abc@xyz.com "
      />
      <ClientPreview
        fname="Jon "
        lname="Jones "
        phone="4038652213"
        email="abcd@xyz.com "
      />
    </div>
  </div>
);

export default AgentClients;
