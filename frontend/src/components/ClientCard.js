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
            <Formik
              initialValues={CLIENT_INIT_VALUES}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                axios.get(`${BASE_URL}/api/client? client_email=${values.email}`).then(res => {
                  if (res) {
                    console.log(res);
                  }
                });
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

              }}
              validationSchema={ADD_CLIENT_VALIDATION}
            >

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
                  {/* <Contact contact={client} /> */}
                </Typography>
              </CardContent>
            </Formik>
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


export default ClientCard;