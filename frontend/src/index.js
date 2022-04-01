import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import About from "./routes/About";
import Signup from "./routes/Signup";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import AgentProfile from "./routes/AgentProfile";
import ClientProfile from "./routes/ClientProfile";
import Listing from "./routes/Listing";
import Requirements from "./routes/Requirements";
import AgentClients from "./routes/AgentClients";
import AgentListings from "./routes/AgentListings";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/app" element={<App />}>
        <Route path="agentProfile" element={<AgentProfile />} />
        <Route path="clientProfile" element={<ClientProfile />} />
        <Route path="listing" element={<Listing />} />
        <Route path="requirements" element={<Requirements />} />
        <Route path="agentClients" element={<AgentClients />} />
        <Route path="agentListings" element={<AgentListings />} />

      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
