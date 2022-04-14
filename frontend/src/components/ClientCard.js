import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { ADD_CLIENT_VALIDATION, CLIENT_INIT_VALUES } from "../components/GeneralFormValidation.js";



// Unnecessary things here
import axios from "axios";
const BASE_URL = process.env.BASE_URL || "localhost:3001";

const ClientCard = ({ client }) => {
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  return (
    <Card
      key={client.id}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        style={{
          flexGrow: 1,
        }}
      >
        <Typography gutterBottom variant="h5">
          {client.fname} {client.lname}
        </Typography>
        <Typography>{client.email}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"
          onClick={handleClickOpenAdd}>
          {" "}
          View
        </Button>
        <Dialog open={openAdd} onClose={handleCloseAdd}>
          <DialogTitle>View Client</DialogTitle>
          <DialogContent>

            <CardContent
              style={{
                flexGrow: 1,
              }}
            >
              <Typography gutterBottom variant="h5">
                {client.fname} {client.lname}
              </Typography>
              <Typography>{client.email}
                {client.phoneNumber}
                {/* <Contact contact={client} /> 
                <Typography gutterBottom variant="h5">
                  {contact.fname} {contact.lname}
                </Typography>
                <Typography>{contact.email}
                  {contact.phoneNumber} */}
                {/* </Typography> */}
              </Typography>
            </CardContent>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
}

const Contact = ({ contact }) => {
  // const contact = {
  //   fname: "Han",
  //   lname: "Solo"
  // }
  return (
    <CardContent
      style={{
        flexGrow: 1,
      }}
    >
      <Typography gutterBottom variant="h5">
        {contact.fname} {contact.lname}
      </Typography>
      <Typography>{contact.email}
        {contact.phoneNumber}
      </Typography>
    </CardContent>
  )
}

const Requirement = ({requirement}) => {

  return(
    <CardContent
       style={{
        flexGrow: 1,
      }}
    >
      <Typography gutterBottom variant="h5">
        Minimum year Built: {requirement.year_built} Minimum square footage: {sq_feet.lname}
      </Typography>
      <Typography> Minimum number of bathrooms: {requirement.bathrooms}
       Minimum number of bedrooms: {requirement.bedrooms} Preferered Neightbourhood: 
      </Typography>

    </CardContent>
  )
}


export default ClientCard;