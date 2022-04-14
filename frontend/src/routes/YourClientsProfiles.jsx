import Button from "@mui/material/Button";
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
import ClientCard from "../components/ClientCard.js";
import {
  ADD_CLIENT_VALIDATION,
  CLIENT_INIT_VALUES,
} from "../components/GeneralFormValidation.js";
import {
  MaterialButton,
  MaterialTextField,
} from "../components/MaterialFormik";

const BASE_URL = process.env.BASE_URL || "localhost:3001";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const YourClientsProfiles = () => {
  const [clients, setClients] = React.useState([]);
  const [openView, setOpenView] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClickOpenView = () => {
    setOpenView(true);
  };
  const handleCloseView = () => {
    setOpenView(false);
  };
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const getClients = () => {
    console.log(`getting clients for agent ${user.id}...`);
    axios.get(`http://${BASE_URL}/api/client?agent_id=${user.id}`).then(res => {
      setClients(res.data);
      console.log("promise fulfilled");
    });
  };

  useEffect(getClients, []);

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
              Client Profiles
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to all your clients profiles.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                    onClick={handleClickOpenView}
                  >
                    Add A Client
                  </Button>
                  <Dialog open={openView} onClose={handleCloseView}>
                    <DialogTitle>Add Client</DialogTitle>
                    <DialogContent>
                      <Formik
                        initialValues={CLIENT_INIT_VALUES}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          const client = {
                            email: values.email,
                            fname: values.firstName,
                            lname: values.lastName,
                            phone_num: values.phoneNumber,
                            agent_id: user.id,
                          };

                          axios
                            .post(`http://${BASE_URL}/api/client`, client)
                            .then(_ => {
                              console.log(client);
                              getClients();
                            });

                          setOpenView(false);
                          setSubmitting(false);
                        }}
                        validationSchema={ADD_CLIENT_VALIDATION}
                      >
                        {({ values, isSubmitting }) => {
                          return (
                            <Form>
                              <MaterialTextField
                                name="firstName"
                                label="First Name"
                              />
                              <MaterialTextField
                                name="lastName"
                                label="Last Name"
                              />
                              <MaterialTextField
                                name="phoneNumber"
                                label="Phone Number"
                              />
                              <MaterialTextField name="email" label="Email" />
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
            {clients.length !== 0 ? (
              clients.map(client => (
                <Grid item key={client.id} xs={12} sm={6} md={4}>
                  <ClientCard client={client} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography>No clients</Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default YourClientsProfiles;
