import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { MaterialTextField } from "../MaterialFormik";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => (
  // <Card>
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={(data, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data);
      setSubmitting(false);
    }}
    validationSchema={loginSchema}
  >
    {({ values, isSubmitting }) => (
      <Form>
        <div className="login-group">
          <div className="login-email">
            <MaterialTextField name="email" label="Email" />
          </div>
          <div className="login-password">
            <MaterialTextField
              name="password"
              type="password"
              label="Password"
            />
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit">
          Login
        </Button>
        {/* Uncomment below to see object rep of values */}
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
    )}
  </Formik>
  // {/* </Card> */}
);

export default LoginForm;
