import React from "react";

const ClientPreview = (props) => {
  return (
    <div className="client-preview">
      <div className="client-preview__info">
        <span className="client-preview__fname">Name: {props.fname}</span>
        <span className="client-preview__lname">{props.lname}</span>
        <span className="client-preview__email">Email: {props.email}</span>
        <span className="client-preview__phone">Phone Number: {props.phone}</span>
      </div>
    </div>
  );
}

export default ClientPreview;
