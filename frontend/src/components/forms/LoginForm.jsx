import { RadioGroup, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import axios from "axios";
import {
  MaterialButton,
  MaterialRadio,
  MaterialTextField,
} from "../MaterialFormik";

const BASE_URL = process.env.BASE_URL;

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  client: yup.string().required(),
});

const LoginForm = () => (
  <Formik
    initialValues={{
      email: "",
      userType: "client",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true);
      if (values.userType === "client") {
        axios
          .get(`${BASE_URL}/api/client?client_email=${values.email}`)
          .then(res => {
            console.log(res.data);
            const client = res.data;
            // localStorage.setItem("client", JSON.stringify(client));
          });
      } else {
        axios
          .get(`${BASE_URL}/api/agent?agent_email=${values.email}`)
          .then(res => {
            console.log(res.data);
            const agent = res.data;
            // localStorage.setItem("agent", JSON.stringify(agent));
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
);

export default LoginForm;
