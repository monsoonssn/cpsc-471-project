import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Requirements = () => (
  <div className="requirements">
    <h2>Your Requirements</h2>
    <div className="butn-requirements">

      <p>Number Of Bedrooms: 3</p>
      <p>Number Of Bathrooms: 2.5</p>
      <p>Yard Size: No Preference</p>
      <p>Neighbourhood: No Preference</p>
      <p>Asking Price: $100000</p>
      <p>Garage Size: No Preference</p>
      <p>Address: 2B Kensignton Ave. Calgary, Alberta, T3B 6G6</p>
      {/* {Address = `${street_num} ${street_name}, ${city}, ${province}, ${postal_code}`} */}
      <p>Minimum Build Year: 2006</p>
      <p>Total Sq Feet: At Least 3000 sqft</p>
      <p></p>
      <Link to="/editListing">
        <Button label="Edit" />
      </Link>


    </div>
  </div>
);

export default Requirements;
