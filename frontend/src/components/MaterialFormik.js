import { FormControlLabel, Radio, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export const MaterialRadio = ({ name, ...props }) => {
  const [field] = useField(name);

  const configRadio = {
    ...field,
    ...props,
  };

  return <FormControlLabel {...configRadio} control={<Radio />} />;
};

export const MaterialTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...props,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
  };

  if (meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};
