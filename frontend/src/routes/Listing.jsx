import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Listing = () => (
  <div className="listing">
    <h2>Your Listing</h2>
    <div className="butn-listing">

      <p>Number Of Bedrooms: 2</p>
      <p>Number Of Bathrooms: 4</p>
      <p>Yard Size: 1000 sqft</p>
      <p>Neighbourhood: Spring Bank</p>
      <p>Asking Price: $100000 </p>
      <p>Garage Size: 2 Car Garage</p>
      <p>Address: 2B Kensignton ave Calgary, Alberta, T3B 6G6</p>
      {/* {Address = `${street_num} ${street_name}, ${city}, ${province}, ${postal_code}`} */}
      <p>Year Built: 2006</p>
      <p>Total Sq Feet: 3000 sqft</p>
      <p>Listing Date: 12/05/2021</p>
      <p></p>
      <Link to="/editListing">
        <Button label="Edit" />
      </Link>


    </div>
  </div>
);

export default Listing;
