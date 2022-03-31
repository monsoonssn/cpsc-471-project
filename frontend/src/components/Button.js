import React from "react";

const Button = ({ label }) => (
  <button className="button button--bestia" type="button">
    <div className="button__bg" />
    <span>{label}</span>
  </button>
);

export default Button;
