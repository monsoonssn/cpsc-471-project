import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import {
  ADD_RENTAL_PROPERTY_VALIDATION,
  RENTAL_PROPERTY_INIT_VALUES
} from "../components/GeneralFormValidation.js";
import {
  MaterialButton,
  MaterialTextField
} from "../components/MaterialFormik";
import RentalPropertyCard from "../components/RentalPropertyCard";

const BASE_URL = "http://localhost:3001";

const RentalProperties = () => {
  const [rentalProperties, setRentalProperties] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getRentalProperties = () => {
    console.log("getting rental properties...");
    axios.get(`${BASE_URL}/api/rental_property`).then(res => {
      setRentalProperties(res.data);
      console.log("promise fulfilled");
    });
  };

  useEffect(getRentalProperties, []);
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          {/* className={classes.container} */}

          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Rental Properties
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to all rental properties.
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
                    Add A Rental Property
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Rental Property</DialogTitle>
                    <DialogContent>
                      <Formik
                        initialValues={RENTAL_PROPERTY_INIT_VALUES}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          axios
                            .get(
                              `${BASE_URL}/api/client? client_email=${values.email}`
                            )
                            .then(res => {
                              if (res) {
                                console.log(res);
                              }
                            });
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }}
                        validationSchema={ADD_RENTAL_PROPERTY_VALIDATION}
                      >
                        {({ values }) => {
                          return (
                            <Form>
                              <MaterialTextField
                                name="listingDate"
                                label="Listing Date"
                              />
                              <MaterialTextField
                                name="sqFeet"
                                label="Total Square Feet"
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
                                label="Price Per Month"
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
                                label="Neighbourhood Name"
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
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                                // disabled={Formik.isSubmitting}
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
            {rentalProperties.map(rp => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
                <RentalPropertyCard rental_property={rp} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default RentalProperties;
