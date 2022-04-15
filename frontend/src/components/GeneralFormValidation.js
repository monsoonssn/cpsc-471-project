import * as yup from "yup";

export const INIT_VALUES = {
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
export const LISTING_INIT_VALUES = {
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
export const RENTAL_PROPERTY_INIT_VALUES = {
  listingDate: "",
  sqFeet: "",
  streetNumber: "",
  unitNumber: "",
  streetName: "",
  city: "",
  postalCode: "",
  askingPrice: "",
  parking: "",
  bedrooms: "",
  bathrooms: "",
  neighbourhood: "",
  yard: "",
  yearBuilt: "",
};
export const REQUIREMENT_INIT_VALUES = {
  sqFeet: "",
  bedrooms: "",
  bathrooms: "",
  yearBuilt: "",
  neighbourhood: "",
  pricePerMonth: "",
};

export const CLIENT_INIT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
export const CONTACT_INIT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  relationship: "",
};

export const ADD_LISTING_VALIDATION = yup.object({
  listingDate: yup.string(),
  sqFeet: yup.number().integer().typeError("Enter a valid integer"),
  streetNumber: yup.number().integer().typeError("Enter a valid integer"),
  unitNumber: yup.string(),
  streetName: yup.string(),
  city: yup.string(),
  postalCode: yup.string(),
  askingPrice: yup.number().integer().typeError("Enter a valid integer"),
  strataCostPerMonth: yup.number().integer().typeError("Enter a valid integer"),
  parking: yup.string(),
  bedrooms: yup.number().integer().typeError("Enter a valid integer"),
  bathrooms: yup.number().typeError("Enter a valid number"),
  neighbourhood: yup.string(),
  yard: yup.string(),
  yearBuilt: yup.number().integer().typeError("Enter a valid integer"),
});

export const ADD_RENTAL_PROPERTY_VALIDATION = yup.object({
  listingDate: yup.string(),
  sqFeet: yup.number().integer().typeError("Enter a valid integer"),
  streetNumber: yup.number().integer().typeError("Enter a valid integer"),
  unitNumber: yup.string(),
  streetName: yup.string(),
  city: yup.string(),
  postalCode: yup.string(),
  pricePerMonth: yup.number().integer().typeError("Enter a valid integer"),
  parking: yup.string(),
  bedrooms: yup.number().integer().typeError("Enter a valid integer"),
  bathrooms: yup.number().typeError("Enter a valid number"),
  neighbourhood: yup.string(),
  yard: yup.string(),
  yearBuilt: yup.number().integer().typeError("Enter a valid integer"),
});

export const ADD_REQUIREMENTS_VALIDATION = yup.object({
  sqFeet: yup.number().integer().typeError("Enter a valid integer"),
  pricePerMonth: yup.number().integer().typeError("Enter a valid integer"),
  bedrooms: yup.number().integer().typeError("Enter a valid integer"),
  bathrooms: yup.number().typeError("Enter a valid number"),
  neighbourhood: yup.string(),
  yearBuilt: yup.number().integer().typeError("Enter a valid integer"),
});

export const ADD_CLIENT_VALIDATION = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.number().integer().typeError("Enter a valid phone number"),
});

export const NEW_APPOINTMENT_VALIDATION = yup.object({
  location: yup.string(),
});

export const ADD_CONTACT_VALIDATION = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  phoneNumber: yup.number().integer().typeError("Enter a valid phone number"),
  relationship: yup.string(),
});
