import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { Formik } from "formik";
  import {
    ADD_LISTING_VALIDATION,
    LISTING_INIT_VALUES,
  } from "./GeneralFormValidation.js";
  
  import axios from "axios";
  const BASE_URL = process.env.BASE_URL || "localhost:3001";
  

  const RentalPropertyCard = ({ rental_property }) => {
    const [openAdd, setOpenAdd] = React.useState(false);
    const [rentalPoperties, setRentalPoperties] = React.useState([]);
  
    const handleClickOpenAdd = () => {
      setOpenAdd(true);
    };
    const handleCloseAdd = () => {
      setOpenAdd(false);
    };
    const getRentalPoperties = () => {
      console.log("getting Rental Poperties..");
      axios
        .get(`http://${BASE_URL}/api/rental_property?rental_property_id=${rental_property_id.id}`)
        .then(res => {
          setRentalPoperties(res.data);
          console.log("promise fulfilled");
        });
    };
    useEffect(getRentalPoperties, []);
  
    return (
      <Card
        key={listing.id}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          style={{
            flexGrow: 1,
          }}
        >
          <Typography gutterBottom variant="h5">
            {rental_property.street_number} {rental_property.unit_number} {rental_property.street_name}{" "}
            {rental_property.city} {rental_property.postal_code}
          </Typography>
          <Typography>Bedrooms: {rental_property.bedrooms}</Typography>
          <Typography>Bathrooms: {rental_property.bathrooms}</Typography>
          <Typography>Asking Price: ${rental_property.asking_price} </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpenAdd}>
            {" "}
            View
          </Button>
          <Dialog open={openAdd} onClose={handleCloseAdd}>
            <DialogTitle>View Rental Property</DialogTitle>
            <DialogContent>
              <CardContent
                style={{
                  flexGrow: 1,
                }}
              >
                <Typography gutterBottom variant="h5">
                  {rental_property.street_number}
                  {rental_property.unit_number} {rental_property.street_name} {rental_property.city} {rental_property.postal_code}
                </Typography>
                {/* <Typography gutterBottom variant="h5">
                  {client.fname} {client.lname}
                </Typography>
                <Typography>{client.email}</Typography>
                <Typography>{client.phone_num}</Typography> */}
                {(() => {
                  if (rental_property.length == 0) {
                    return <Typography>No rental property for this client.</Typography>;
                  } else {
                    return (
                      <>
                        {/* <Typography variant="h6">Listings:</Typography> */}
                        {listings.map(rental_property => (
                          <RentalProperty rental_property={rental_property} key={rental_property.id} />
                        ))}
                      </>
                    );
                  }
                })()}
              </CardContent>
            </DialogContent>
          </Dialog>
        </CardActions>
      </Card>
    );
  };
  
  const RentalPoperties = ({ rental_property }) => {
    return (
      <CardContent
        style={{
          flexGrow: 1,
        }}
      >
        <Typography>Listing Date: {rental_property.listing_date}</Typography>
        <Typography>
          Total square footage:
          {rental_property.sq_feet}
        </Typography>
        <Typography>
          {" "}
          Address: {rental_property.street_number} {rental_property.unit_number}{" "}
          {rental_property.street_name}
          {rental_property.city} {rental_property.postal_code}
        </Typography>
        <Typography>Asking price: {rental_property.asking_price}</Typography>
        <Typography>
          Strata cost per month: {rental_property.strata_cost_per_month}
        </Typography>
        <Typography>Parking Description: {rental_property.parking}</Typography>
        <Typography>Number of bedrooms: {rental_property.bedrooms}</Typography>
        <Typography>Number of bathrooms: {rental_property.bathrooms}</Typography>
        <Typography>Neightbourhood: {rental_property.neighbourhood}</Typography>
        <Typography>Yard description: {rental_property.yard}</Typography>
        <Typography>Year built: {rental_property.year_built}</Typography>
      </CardContent>
    );
  };
  export default ListingCard;
  