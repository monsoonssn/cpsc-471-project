import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const AgentLinks = () => {
  return (
    <List>
      <Link to="/app/yourProfile">
        <ListItem button key="Profile">
          <ListItemIcon>{<PersonIcon />}</ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </Link>

      <Link to="/app/yourClientsProfiles">
        <ListItem button key="Clients">
          <ListItemIcon>{<PersonIcon />}</ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
      </Link>
      <Link to="/app/Listing">
        <ListItem button key="Listing">
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText primary="Listings" />
        </ListItem>
      </Link>
      <Link to="/app/RentalProperties">
        <ListItem button key="Rental Properties">
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText primary="Rental Properties" />
        </ListItem>
      </Link>

      <Link to="/app/Appointment">
        <ListItem button key="Appointments">
          <ListItemIcon>{<PersonIcon />}</ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
      </Link>
    </List>
  );
};

export const ClientLinks = () => {
  return (
    <List>
      <Link to="/app/yourProfile">
        <ListItem button key="Profile">
          <ListItemIcon>{<PersonIcon />}</ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </Link>
      <Link to="/app/Listing">
        <ListItem button key="Listing">
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText primary="Listings" />
        </ListItem>
      </Link>
      <Link to="/app/RentalProperties">
        <ListItem button key="Rental Properties">
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText primary="Rental Properties" />
        </ListItem>
      </Link>

      <Link to="/app/Appointment">
        <ListItem button key="Appointments">
          <ListItemIcon>{<PersonIcon />}</ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
      </Link>
    </List>
  );
};
