import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  FormGroup,
  IconButton,
  RadioGroup,
  Snackbar,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import axios from "axios";
import {
  MaterialButton,
  MaterialRadio,
  MaterialTextField,
} from "../MaterialFormik";

const BASE_URL = process.env.BASE_URL || "localhost:3001";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  userType: yup.string().required(),
});

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (

    <>
      <Formik
        initialValues={{
          email: "",
          userType: "client",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          if (values.userType === "client") {
            axios
              .get(`http://${BASE_URL}/api/client?client_email=${values.email}`)
              .then(res => {
                if (!res.data) {
                  setOpen(true);
                } else {
                  const client = res.data;

                  // Now check if they are buyer/seller/renter/landlord
                  axios.get(`http://${BASE_URL}/api/buyer/${client.id}`).then(res => {
                    if (!res.data) {
                      client.buyer = true;
                    }
                  })

                  console.log(client);
                }
                // localStorage.setItem("user", JSON.stringify(client));
              });
          } else {
            axios
              .get(`http://${BASE_URL}/api/agent?agent_email=${values.email}`)
              .then(res => {
                if (!res.data) {
                  setOpen(true);
                } else {
                  const agent = res.data;
                  console.log(agent);
                }
                // localStorage.setItem("user", JSON.stringify(agent));
              });
          }
          setSubmitting(false);
        }}
        validationSchema={loginSchema}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div className="login-group">
              <Typography sx={{ mt: "10px" }}>
                Are you a client or an agent?
              </Typography>
              <RadioGroup defaultValue="client">
                <MaterialRadio name="userType" value="client" label="Client" />
                <MaterialRadio name="userType" value="agent" label="Agent" />
              </RadioGroup>
              <div className="login-email">
                <MaterialTextField name="email" label="Email" />
              </div>
            </div>
            <MaterialButton
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitting}
            >
              Log in
            </MaterialButton>
          </Form>
        )}
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
          A user with that email does not exist!
        </Alert>
      </Snackbar>
    </>
  )
};

export default LoginForm;
