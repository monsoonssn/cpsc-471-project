import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./routes/About";
import Appointment from "./routes/Appointment";
import Landing from "./routes/Landing";
import Listing from "./routes/Listing";
import Login from "./routes/Login";
import RentalProperties from "./routes/RentalProperties";
import Requirements from "./routes/Requirements";
import Signup from "./routes/Signup";
import YourClientsProfiles from "./routes/YourClientsProfiles";
import YourProfile from "./routes/YourProfile";
import PrivateRoute from "./components/PrivateRoute";

const rootElement = document.getElementById("root");
const isLoggedIn = localStorage.getItem("user") !== null;

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/app" /> : <Landing />}
      ></Route>
      <Route
        path="/about"
        element={isLoggedIn ? <Navigate to="/app" /> : <About />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/app" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/app" /> : <Signup />}
      />
      <Route path="/app" element={<PrivateRoute auth={isLoggedIn} />}>
        <Route path="/app" element={<App />}>
          <Route path="yourProfile" element={<YourProfile />} />
          <Route path="yourClientsProfiles" element={<YourClientsProfiles />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="Listing" element={<Listing />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="rentalProperties" element={<RentalProperties />} />
        </Route>
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
