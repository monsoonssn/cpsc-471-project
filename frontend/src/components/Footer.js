import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => (
  <div style={{
    "fontSize": "14px",
    "textAlign": "center",
    "paddingBottom": "25px"
  }}>
    <Link to='/about'>About</Link>
  </div>
);

export default Footer;
