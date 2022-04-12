import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Typography, AppBar, Grid, Card, CardContent, CardActions, CardMedia, CssBaseline, Grib, Toolbar, Container } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from './jstyles.jsx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
const App = () => {
  const classes = useStyles();
  return(
  <div className="app">
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <HomeIcon className={classes.icon}/>
          <Typography variant ='h6' noWrap component="div">
            Real Estate Database
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
      }}
      variant="permanent"
      anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        <Toolbar />
        <Typography>
          Hi
        </Typography>
      </Box>

      </Box>
  </div>
  );
  }

// const Navigation = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link activeClassName="current" to="/">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           About
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

// const NavigationAgent = () => (
  
//   <nav>
//     <ul>
//       <li>
//         <Link activeClassName="current" to="/">
//           Profile
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Clients
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Listings
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Rental Properties
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Appointments
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

// const NavigationClient = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link activeClassName="current" to="/">
//           Profile
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Listings
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Rental Properties
//         </Link>
//       </li>
//       <li>
//         <Link activeClassName="current" to="/about">
//           Appointments
//         </Link>
//       </li>
//     </ul>
//   </nav>
//);

export default App;
