import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  FormGroup,
  IconButton,
  RadioGroup,
  Snackbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import {
  MaterialButton,
  MaterialCheckbox,
  MaterialRadio,
  MaterialTextField,
} from "../MaterialFormik";

const BASE_URL = process.env.BASE_URL || "localhost:3001";

const INIT_VALUES = {
  userType: "client",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  buyer: false,
  seller: false,
  renter: false,
  landlord: false,
};

const SIGNUP_VALIDATION = yup.object({
  userType: yup.string().required(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.number().integer().typeError("Enter a valid phone number"),
  buyer: yup.boolean(),
  seller: yup.boolean(),
  renter: yup.boolean(),
  landlord: yup.boolean(),
});

SIGNUP_VALIDATION.test("clientCheckboxTest", null, values => {
  if (
    values.userType === "client" &&
    (values.buyer || values.seller || values.renter || values.landlord)
  ) {
    return true;
  }
  return new yup.ValidationError(
    "Client type is required",
    null,
    "clientTypeField"
  );
});

const SignUpForm = () => {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (submitted) {
    return <Navigate push to="/login" />;
  }

  return (
    <>
      <Formik
        initialValues={INIT_VALUES}
        onSubmit={async (values, { setSubmitting }) => {
          // await new Promise(r => setTimeout(r, 500));
          setSubmitting(true);
          if (values.userType === "client") {
            axios
              .get(`http://${BASE_URL}/api/client?client_email=${values.email}`)
              .then(res => {
                if (res.data) {
                  setOpen(true);
                } else {
                  let createdClient;
                  axios
                    .post(`http://${BASE_URL}/api/client`, {
                      email: values.email,
                      fname: values.firstName,
                      lname: values.lastName,
                      phone_num: values.phoneNumber,
                    })
                    .then(res => {
                      createdClient = res.data;
                      console.dir(createdClient);

                      if (values.buyer) {
                        axios.post(`http://${BASE_URL}/api/buyer`, {
                          id: createdClient.id,
                        });
                      }

                      if (values.seller) {
                        axios.post(`http://${BASE_URL}/api/seller`, {
                          id: createdClient.id,
                        });
                      }

                      if (values.renter) {
                        axios.post(`http://${BASE_URL}/api/renter`, {
                          id: createdClient.id,
                        });
                      }

                      if (values.landlord) {
                        axios.post(`http://${BASE_URL}/api/landlord`, {
                          id: createdClient.id,
                        });
                      }

                      setSubmitted(true);
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              });
          } else {
            console.log("Not a client");
            axios
              .get(`http://${BASE_URL}/api/agent?agent_email=${values.email}`)
              .then(res => {
                if (res.data) {
                  setOpen(true);
                } else {
                  axios
                    .post(`http://${BASE_URL}/api/agent`, {
                      email: values.email,
                      fname: values.firstName,
                      lname: values.lastName,
                      phone_num: values.phoneNumber,
                    })
                    .then(_ => {
                      setSubmitted(true);
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              });
          }
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
        validationSchema={SIGNUP_VALIDATION}
      >
        {({ values, isSubmitting }) => {
          return (
            <Form>
              <Typography sx={{ mt: "10px" }}>
                Are you a client or an agent?
              </Typography>
              <RadioGroup defaultValue="client">
                <MaterialRadio name="userType" value="client" label="Client" />
                <MaterialRadio name="userType" value="agent" label="Agent" />
              </RadioGroup>
              <MaterialTextField name="firstName" label="First Name" required />
              <MaterialTextField name="lastName" label="Last Name" required />
              <MaterialTextField name="phoneNumber" label="Phone Number" />
              <MaterialTextField name="email" label="Email" required />
              {(() => {
                if (values.userType === "client") {
                  return (
                    <>
                      <Typography>What type of client are you?</Typography>
                      <FormGroup>
                        <MaterialCheckbox
                          name="buyer"
                          value="buyer"
                          label="Buyer"
                        />
                        <MaterialCheckbox
                          name="seller"
                          value="seller"
                          label="Seller"
                        />
                        <MaterialCheckbox
                          name="renter"
                          value="renter"
                          label="Renter"
                        />
                        <MaterialCheckbox
                          name="landlord"
                          value="landlord"
                          label="Landlord"
                        />
                      </FormGroup>
                    </>
                  );
                } else {
                  values.buyer = false;
                  values.seller = false;
                  values.renter = false;
                  values.landlord = false;
                  return <></>;
                }
              })()}
              <MaterialButton
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Sign Up
              </MaterialButton>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          A user with that email already exists!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUpForm;
