import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const RentalProperties = () => (
  <div className="RentalProperties">
    <h2>Your RentalProperties</h2>
    <div className="butn-RentalProperties">

      <p>Number Of Bedrooms: 3</p>
      <p>Number Of Bathrooms: 2</p>
      <p>Yard Size: 1000 sqft</p>
      <p>Neighbourhood: Summer Bank</p>
      <p>Asking Price: $200000 </p>
      <p>Garage Size: 1 Car Garage</p>
      <p>Address: 20 Brisebois Dr, Alberta, T3G 1SL</p>
      {/* {Address = `${street_num} ${street_name}, ${city}, ${province}, ${postal_code}`} */}
      <p>Year Built: 2008</p>
      <p>Total Sq Feet: 5000 sqft</p>
      <p>RentalProperties Date: 10/04/2021</p>
      <p></p>
      <Link to="/editRentalProperties">
        <Button label="Edit" />
      </Link>


    </div>
  </div>
);

export default RentalProperties;
