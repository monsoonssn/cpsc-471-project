import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const RentalPropertyCard = ({ rental_property }) => {
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <Card
      key={rental_property.id}
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
          {rental_property.street_number} {rental_property.unit_number}{" "}
          {rental_property.street_name} {rental_property.city}{" "}
          {rental_property.postal_code}
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
              <Typography>
                Listing Date: {rental_property.listing_date.substring(0, 10)}
              </Typography>
              <Typography>
                Total square footage: {" "}
                {rental_property.sq_feet}
              </Typography>
              <Typography>
                {" "}
                Address: {rental_property.street_number}{" "}
                {rental_property.unit_number} {rental_property.street_name} {" "}
                {rental_property.city}{" "} {rental_property.postal_code}
              </Typography>
              <Typography>
                Asking price: {rental_property.asking_price}
              </Typography>
              <Typography>
                Strata cost per month: {rental_property.strata_cost_per_month}
              </Typography>
              <Typography>
                Parking Description: {rental_property.parking}
              </Typography>
              <Typography>
                Number of bedrooms: {rental_property.bedrooms}
              </Typography>
              <Typography>
                Number of bathrooms: {rental_property.bathrooms}
              </Typography>
              <Typography>
                Neightbourhood: {rental_property.neighbourhood}
              </Typography>
              <Typography>Yard description: {rental_property.yard}</Typography>
              <Typography>Year built: {rental_property.year_built}</Typography>
            </CardContent>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default RentalPropertyCard;
