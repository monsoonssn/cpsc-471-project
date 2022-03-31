// import logo from './logo.svg';
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
// import About from "./routes/about";
// import Landing from "./routes/landing";

const App = () => (
  <div className="app">
    <h1>Something</h1>
    <Navigation />
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

export default App;
