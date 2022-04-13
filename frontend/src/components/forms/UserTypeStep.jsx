import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { MaterialRadio } from "../MaterialFormik";

const UserTypeStep = () => (
  <Formik
    initialValues={{
      userType: "",
    }}
    onSubmit={async (values, { setSubmitting }) => {
      // await new Promise(r => setTimeout(r, 500));
      setSubmitting(true);
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({ values }) => {
      return (
        <Form>
          <Typography>Are you a client or an agent?</Typography>
          <div>
            <div>
              <MaterialRadio
                type="radio"
                id="client"
                name="userType"
                value="client"
                label="Client"
              />
            </div>

            <div>
              <MaterialRadio
                type="radio"
                id="agent"
                name="userType"
                value="agent"
                label="Agent"
              />
            </div>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <div>Further sign up info to be implemented...</div>
        </Form>
      );
    }}
  </Formik>
);

export default UserTypeStep;
