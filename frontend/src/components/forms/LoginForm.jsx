import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Card } from "@mui/material";

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
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="login-group">
            <Field name="email" type="input" label="Email" as={TextField} />
            <Field
              name="password"
              type="password"
              label="Password"
              as={TextField}
            />
          </div>
          <Button disabled={isSubmitting} type="submit">
            Login
          </Button>
          {/* Uncomment below to see object rep of values */}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  // {/* </Card> */}
);

export default LoginForm;
