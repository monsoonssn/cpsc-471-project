import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from './jstyles.jsx';
import PersonIcon from '@mui/icons-material/Person';


export
  const AgentLinks = () => {

    return (
      <List>
        {/* {['Profile', 'Clients', 'Listings/Rental Properties', 'Appointments'].map((text, index) => (
          <Link>
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 3 === 2 ? <HomeIcon /> : <PersonIcon />}

              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))} */}
         <Link to = "/app/yourProfile">
            <ListItem button key="Profile">
              <ListItemIcon>
                {<PersonIcon />}

              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>

          <Link to = "/app/yourClientsProfiles">
            <ListItem button key="Clients">
              <ListItemIcon>
                { <PersonIcon />}

              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItem>
          </Link>
          <Link to = "/app/Listing">
            <ListItem button key="Listing">
              <ListItemIcon>
                {<HomeIcon />}

              </ListItemIcon>
              <ListItemText primary="Listings" />
            </ListItem>
          </Link>
          <Link to = "/app/RentalProperties">
            <ListItem button key="Rental Properties">
              <ListItemIcon>
                {<HomeIcon />}

              </ListItemIcon>
              <ListItemText primary="Rental Properties" />
            </ListItem>
          </Link>

          <Link to = "/app/Appointment">
            <ListItem button key="Appointments">
              <ListItemIcon>
                { <PersonIcon />}

              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItem>
          </Link>


      </List>)


  }

export
  const ClientLinks = () => {
    return (
      <List>
        <Link to = "/app/yourProfile">
            <ListItem button key="Profile">
              <ListItemIcon>
                {<PersonIcon />}

              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Link to = "/app/Listing">
            <ListItem button key="Listing">
              <ListItemIcon>
                {<HomeIcon />}

              </ListItemIcon>
              <ListItemText primary="Listing" />
            </ListItem>
          </Link>
          <Link to = "/app/RentalProperties">
            <ListItem button key="Rental Properties">
              <ListItemIcon>
                {<HomeIcon />}

              </ListItemIcon>
              <ListItemText primary="Rental Properties" />
            </ListItem>
          </Link>

          <Link to = "/app/Appointment">
            <ListItem button key="Appointments">
              <ListItemIcon>
                { <PersonIcon />}

              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItem>
          </Link>


      </List>)
  }
