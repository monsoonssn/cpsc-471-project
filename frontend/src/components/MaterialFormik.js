import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
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

export const MaterialCheckbox = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const configCheckbox = {
    ...field,
    ...props,
    // variant: "outlined",
    // margin: "normal",
    // fullWidth: true,
  };

  if (meta.touched && meta.error) {
    configCheckbox.error = true;
    configCheckbox.helperText = meta.error;
  }

  return <FormControlLabel {...configCheckbox} control={<Checkbox />} />;
};

export const MaterialButton = ({ children, ...props }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...props,
    onclick: handleSubmit,
  };
  return <Button {...configButton}>{children}</Button>;
};
