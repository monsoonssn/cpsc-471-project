import React from "react";

const Button = ({ label, type }) => (
  <button className="button button--bestia" type={type}>
    <div className="button__bg" />
    <span>{label}</span>
  </button>
);

export default Button;
