import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import {
  ADD_CLIENT_VALIDATION,
  CLIENT_INIT_VALUES,
} from "../components/GeneralFormValidation.js";
import {
  MaterialButton,
  MaterialTextField,
} from "../components/MaterialFormik";

const cards = [1];
const BASE_URL = process.env.BASE_URL || "localhost:3001";

const Appointment = () => {
  // const [appointment, setAppointment] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const getAppointment = () => {
  //   console.log("getting appointments...");
  //   axios.get(`http://${BASE_URL}/api/appointment`).then(res => {
  //     setAppointment(res.data);
  //     console.log("promise fulfilled");
  //   });
  // };

  // React.useEffect(getAppointment, []);

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Appointments
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to the appointment section. Here you can
              view/create appointmets!.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                    onClick={handleClickOpen}
                  >
                    Create a new appointment
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>New Appointment</DialogTitle>
                    <DialogContent>
                      <Formik
                        initialValues={CLIENT_INIT_VALUES}
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
                        validationSchema={ADD_CLIENT_VALIDATION}
                      >
                        {({ values }) => {
                          return (
                            <Form>
                              <MaterialTextField
                                name="Client Name or Agent name"
                                label="Client Name or Agent name"
                              />
                              <MaterialTextField
                                name="Location"
                                label="Location"
                              />
                              <MaterialTextField
                                name="Date/Time"
                                label="Date/Time"
                              />

                              <MaterialButton
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
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
            padding: "20pxx 0",
          }}
        >
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
                <Card
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
                      Appointment Id: 45
                    </Typography>
                    <Typography>With: agent name</Typography>
                    <Typography>Location: Coffee Shop</Typography>
                    <Typography>Date/Time:</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Appointment;
