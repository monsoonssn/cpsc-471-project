import React, { useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import useStyles from "../jstyles.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const BASE_URL = "http://localhost:3001";

const Listing = () => {
  const [listings, setListings] = React.useState([]);

  const getListings = () => {
    console.log("getting listings...");
    axios.get(`${BASE_URL}/api/listing`).then(res => {
      setListings(res.data);
      console.log("promise fulfilled");
    });
  };
  useEffect(getListings, []);

  return (
    <div>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Listings
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to all of your Listings.
            </Typography>

            <div>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                  >
                    Refine Search
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                  >
                    Add A Listing
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container
          maxWidth="xl"
          style={{
            padding: "20px 0",
          }}
        >
          <Grid container spacing={4}>
            {listings.map((l) => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
                <Card
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
                      {l.street_number}{l.unit_number} {l.street_name} {l.city}
                    </Typography>
                    <Typography>Bedrooms: {l.bedrooms}</Typography>
                    <Typography>Bathrooms: {l.bathrooms}</Typography>
                    <Typography>Asking Price: ${l.asking_price} </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {" "}
                      View
                    </Button>
                    <Button size="small" color="primary">
                      {" "}
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Listing;
