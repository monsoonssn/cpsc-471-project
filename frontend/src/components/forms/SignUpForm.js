import { FormGroup, RadioGroup, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import {
  MaterialButton,
  MaterialCheckbox,
  MaterialRadio,
  MaterialTextField,
} from "../MaterialFormik";

const INIT_VALUES = {
  userType: "client",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
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
  // clientType: yup.array().required("Client type is required"),
  buyer: yup.boolean(),
  seller: yup.boolean(),
  renter: yup.boolean(),
  landlord: yup.boolean(),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
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

// This is the base of the multi step sign in form
const SignUpForm = () => {
  return (
    <>
      <UserTypeStep />
    </>
  );
};

const UserTypeStep = () => {
  return (
    <Formik
      initialValues={INIT_VALUES}
      onSubmit={async (values, { setSubmitting }) => {
        // await new Promise(r => setTimeout(r, 500));
        setSubmitting(true);
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
      validationSchema={SIGNUP_VALIDATION}
    >
      {({ values }) => {
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
            <MaterialTextField
              name="password"
              label="Password"
              type="password"
              required
            />
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
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              // disabled={Formik.isSubmitting}
            >
              Sign Up
            </MaterialButton>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
