import { FormGroup, RadioGroup, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import exports from "../utils/htmlEncode";

const BASE_URL = "localhost:3001";

export
const INIT_VALUES = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    budget: "",
    relationship: "",
    listingDate: "",
    sqFeet: "",
    streetNumber: "",
    unitNumber: "",
    streetName: "",
    city: "",
    postalCode: "",
    askingPrice: "",
    strataCostPerMonth: "",
    parking: "",
    bedrooms: "",
    bathrooms: "",
    neighbourhood: "",
    yard: "",
    yearBuilt: "",

};
export
const CLIENT_INIT_VALUES = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    

};

export
const ADD_LISTING_VALIDATION = yup.object({
    listingDate: yup.string().required("Listing date is required"),
    sqFeet: yup.number().integer().typeError("Enter a valid integer"),
    streetNumber: yup.number().integer().typeError("Enter a valid integer"),
    unitNumber: yup.string(),
    streetName: yup.string().required("Street name is required"),
    city: yup.string().required("City name is required"),
    postalCode: yup.string().required("Postal code is required"),
    askingPrice: yup.number().integer().typeError("Enter a valid integer"),
    strataCostPerMonth: yup.number().integer().typeError("Enter a valid integer"),
    parking: yup.string(),
    bedrooms: yup.number().integer().typeError("Enter a valid integer"),
    bathrooms: yup.number().typeError("Enter a valid number"),
    neighbourhood: yup.string(),
    yard: yup.string(),
    yearBuilt: yup.number().integer().typeError("Enter a valid integer"),

});

export
const ADD_RENTAL_PROPERTY_VALIDATION = yup.object({
    listingDate: yup.string().required("Listing date is required"),
    sqFeet: yup.number().integer().typeError("Enter a valid integer"),
    streetNumber: yup.number().integer().typeError("Enter a valid integer"),
    unitNumber: yup.string(),
    streetName: yup.string().required("Street name is required"),
    city: yup.string().required("City name is required"),
    postalCode: yup.string().required("Postal code is required"),
    pricePerMonth: yup.number().integer().typeError("Enter a valid integer"),
    parking: yup.string(),
    bedrooms: yup.number().integer().typeError("Enter a valid integer"),
    bathrooms: yup.number().typeError("Enter a valid number"),
    neighbourhood: yup.string(),
    yard: yup.string(),
    yearBuilt: yup.number().integer().typeError("Enter a valid integer"),
});

export
const ADD_REQUIREMENTS_VALIDATION = yup.object({
    sqFeet: yup.number().integer().typeError("Enter a valid integer"),
    pricePerMonth: yup.number().integer().typeError("Enter a valid integer"),
    bedrooms: yup.number().integer().typeError("Enter a valid integer"),
    bathrooms: yup.number().typeError("Enter a valid number"),
    neighbourhood: yup.string(),
    yearBuilt: yup.number().integer().typeError("Enter a valid integer"),
});

export
const ADD_CLIENT_VALIDATION = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.number().integer().typeError("Enter a valid phone number"),
});

export
const NEW_APPOINTMENT_VALIDATION = yup.object({
    location: yup.string().required("Location is required")
});

// exports={NEW_APPOINTMENT_VALIDATION,ADD_CLIENT_VALIDATION,ADD_REQUIREMENTS_VALIDATION,ADD_RENTAL_PROPERTY_VALIDATION,ADD_LISTING_VALIDATION,CLIENT_INIT_VALUES,INIT_VALUES}
