import React from "react";

const ListingPreview = (props) => {
  return (
    <div className="listing-preview">
      <div className="listing-preview__info" style={{display: "flex", gap: 10}}>
        <span className="listing-preview__address">Address: {props.address}</span>
        <span className="listing-preview__price">Listing Price: {props.price}</span>
        <span className="listing-preview__sqft">Square Feet: {props.sqft}</span>
        <span className="listing-preview__bedrooms">Bedrooms: {props.bedrooms}</span>
        <span className="listing-preview__bedrooms">Bathrooms: {props.bathrooms}</span>
        <span className="listing-preview__year-built">Year Built: {props.yearBuilt}</span>
      </div>
    </div>
  );
}

export default ListingPreview;
