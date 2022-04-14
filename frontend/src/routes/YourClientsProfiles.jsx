import React, { useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import useStyles from "../jstyles.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  MaterialButton,
  MaterialCheckbox,
  MaterialRadio,
  MaterialTextField,
} from "../components/MaterialFormik";
import { Form, Formik } from "formik";
import { ADD_CLIENT_VALIDATION, CLIENT_INIT_VALUES } from "../components/GeneralFormValidation.js";

import ClientCard from "../components/ClientCard.js";

const BASE_URL = "http://localhost:3001";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const YourClientsProfiles = () => {
  const [clients, setClients] = React.useState([]);
  const [openView, setOpenView] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

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
    console.log("getting clients...");
    axios.get(`${BASE_URL}/api/client`).then(res => {
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
                    onClick={handleClickOpenView} >

                    Add A Client
                  </Button>
                  <Dialog open={openView} onClose={handleCloseView}>
                    <DialogTitle>Add Client</DialogTitle>
                    <DialogContent>
                      <Formik
                        initialValues={CLIENT_INIT_VALUES}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          axios.get(`${BASE_URL}/api/client? client_email=${values.email}`).then(res => {
                            if (res) {
                              console.log(res);
                            }
                          });
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);

                        }}
                        validationSchema={ADD_CLIENT_VALIDATION}
                      >
                        {({ values }) => {
                          return (
                            <Form>
                              <MaterialTextField name="firstName" label="First Name" />
                              <MaterialTextField name="lastName"
                                label="Last Name"  />
                              <MaterialTextField name="phoneNumber" label="Phone Number" />
                              <MaterialTextField name="email" label="Email"  />
                              <MaterialButton
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                              // disabled={Formik.isSubmitting}
                              >
                                Submit
                              </MaterialButton>
                            </Form>);
                        }}
                      </Formik>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                  >

                    Refine Search
                  </Button>

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
            {clients.map((client) => (
              <Grid item key={client.id} xs={12} sm={6} md={4}>
                <ClientCard client={client} />
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default YourClientsProfiles;
