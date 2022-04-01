// import logo from './logo.svg';
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
// import About from "./routes/about";
// import Landing from "./routes/landing";

const App = () => (
  <div className="app">
    <h1>Real Estate Database System</h1>
    <NavigationClient />
    {/* <Navigation /> */}
    <Outlet />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="current" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

const NavigationAgent = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="current" to="/">
          Profile
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Clients
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Listings
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Rental Properties
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Appointments
        </Link>
      </li>
    </ul>
  </nav>
);
const NavigationClient = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="current" to="/">
          Profile
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Listings
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Rental Properties
        </Link>
      </li>
      <li>
        <Link activeClassName="current" to="/about">
          Appointments
        </Link>
      </li>
    </ul>
  </nav>
);

export default App;
