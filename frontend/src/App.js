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
import { AgentLinks } from "./Links";


const drawerWidth = 240;

const App = () => {
  // const classes = useStyles();
  return (

    <div className="app">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            {/* <HomeIcon className={classes.icon}/> */}
            <Typography variant='h6' noWrap component="div">
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
          <AgentLinks />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >

          <Toolbar />
          <Outlet />
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
