import React from "react";
import ListingPreview from "../components/ListingPreview";

const AgentListings = () => (
  <div className="agent-listings">
    <h2>Your Listings</h2>
    <div className="agent-listings-info">
      <ListingPreview
        address="55 Norford Common NW Calgary, AB, V2G 6A1 "
        price="300000"
        sqft="2500"
        bedrooms="3"
        bathrooms="2"
        yearBuilt="2009"
      />
      <ListingPreview
        address="42 Borland Road Edmonton, AB, H6N 8J0 "
        price="23000000"
        sqft="5000"
        bedrooms="7"
        bathrooms="3.5"
        yearBuilt="2018"
      />
      <ListingPreview
        address="67 Happy Road Victoria, BC, R6T 5E4"
        price="1000000"
        sqft="4000"
        bedrooms="5"
        bathrooms="2.5"
        yearBuilt="2010"
      />
      <ListingPreview
        address="34 Rutherford Road Salmon Arm, BC, K9K 7N8"
        price="700000"
        sqft="3000"
        bedrooms="4"
        bathrooms="2"
        yearBuilt="1999"
      />
      <ListingPreview
        address="84 Hudson Street Langley BC, H6F 4G8"
        price="200000"
        sqft="2000"
        bedrooms="3"
        bathrooms="1.5"
        year-built="1995"
      />
    </div>
  </div>
);

export default AgentListings;
