import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import About from "./routes/About";
import Signup from "./routes/Signup";
import Landing from "./routes/Landing";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/app" element={<App />}></Route>
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
