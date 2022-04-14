import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import About from "./routes/About";
import Appointment from "./routes/Appointment";
import Signup from "./routes/Signup";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import YourProfile from "./routes/YourProfile";
import YourClientsProfiles from "./routes/YourClientsProfiles";
import Listing from "./routes/Listing";
import Requirements from "./routes/Requirements";
import RentalProperties from "./routes/RentalProperties"

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
        <Route path="yourProfile" element={<YourProfile />} />
        <Route path="yourClientsProfiles" element={<YourClientsProfiles />} />
        <Route path="requirements" element={<Requirements />} />
        <Route path="Listing" element={<Listing />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="rentalProperties" element={<RentalProperties />} />

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
