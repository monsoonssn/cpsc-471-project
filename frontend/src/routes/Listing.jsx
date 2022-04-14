import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import {
  ADD_CLIENT_VALIDATION,
  LISTING_INIT_VALUES,
} from "../components/GeneralFormValidation.js";
import ListingCard from "../components/ListingCard.js";
import {
  MaterialButton,
  MaterialTextField,
} from "../components/MaterialFormik";

const BASE_URL = "http://localhost:3001";

const Listing = () => {
  const [listings, setListings] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getListings = () => {
    console.log("getting listings...");
    axios.get(`${BASE_URL}/api/listing`).then(res => {
      setListings(res.data);
      console.log("promise fulfilled");
    });
  };
  useEffect(getListings, []);

  return (
    <div>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Listings
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to all listings.
            </Typography>

            <div>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                    onClick={handleClickOpen}
                  >
                    Add A Listing
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Listing</DialogTitle>
                    <DialogContent>
                      <Formik
                        initialValues={LISTING_INIT_VALUES}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          const listing = {
                            street_number: values.streetNumber,
                            unit_number: values.unitNumber,
                            street_name: values.streetName,
                            city: values.city,
                            postal_code: values.postalCode,
                            listing_date: values.listingDate,
                            asking_price: values.askingPrice,
                            parking: values.parking,
                            bedrooms: values.bedrooms,
                            bathrooms: values.bathrooms,
                            sq_feet: values.sqFeet,
                            strate_cost_per_month: values.strataCostPerMonth,
                            neighbourhood: values.neighbourhood,
                            yard: values.yard,
                            year_built: values.yearBuilt,
                          };

                          axios
                            .post(`http://${BASE_URL}/api/listing`, listing)
                            .then(res => {
                              console.log("promise fulfilled");
                              setListings(res.data);
                              getListings();
                              setOpen(false);
                            });

                          setSubmitting(false);
                        }}
                        validationSchema={ADD_CLIENT_VALIDATION}
                      >
                        {({ values, isSubmitting }) => {
                          return (
                            <Form>
                              <MaterialTextField
                                name="listingDate"
                                label="Listing Date"
                              />
                              <MaterialTextField
                                name="sqFeet"
                                label="Total Feet"
                              />
                              <MaterialTextField
                                name="streetNumber"
                                label="Street Number"
                              />
                              <MaterialTextField
                                name="unitNumber"
                                label="Unit Number"
                              />
                              <MaterialTextField
                                name="streetName"
                                label="Street Name"
                              />
                              <MaterialTextField name="city" label="City" />
                              <MaterialTextField
                                name="postalCode"
                                label="Postal Code"
                              />
                              <MaterialTextField
                                name="askingPrice"
                                label="Asking Price"
                              />
                              <MaterialTextField
                                name="strataCostPerMonth"
                                label="Strata Cost Per Month"
                              />
                              <MaterialTextField
                                name="parking"
                                label="Parking"
                              />
                              <MaterialTextField
                                name="bedrooms"
                                label="Number of Bedrooms"
                              />
                              <MaterialTextField
                                name="bathrooms"
                                label="Number of Bathrooms"
                              />
                              <MaterialTextField
                                name="neighbourhood"
                                label="Neighbourhood"
                              />
                              <MaterialTextField
                                name="yard"
                                label="Yard Description"
                              />
                              <MaterialTextField
                                name="yearBuilt"
                                label="Year Built"
                              />
                              <MaterialButton
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isSubmitting}
                              >
                                Submit
                              </MaterialButton>
                            </Form>
                          );
                        }}
                      </Formik>
                    </DialogContent>
                  </Dialog>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container
          maxWidth="xl"
          style={{
            padding: "20px 0",
          }}
        >
          <Grid container spacing={4}>
            {listings.map(listing => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
                <ListingCard listing={listing} />
                {/* <Card
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
                      {l.street_number}{l.unit_number} {l.street_name} {l.city}
                    </Typography>
                    <Typography>Bedrooms: {l.bedrooms}</Typography>
                    <Typography>Bathrooms: {l.bathrooms}</Typography>
                    <Typography>Asking Price: ${l.asking_price} </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                    >
                      {" "}
                      View
                    </Button>
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Listing;
