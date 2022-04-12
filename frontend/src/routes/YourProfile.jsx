import React from "react";
import { Link, Outlet } from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from '../jstyles.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

// const AgentProfile = () => (
//   <div className="agentProfile">
//     <div className="agentProfile_content">
//       <h1>Your Profile</h1>
//       <Typography variant = "h2"> Name: AJohn Smith</Typography>
//       <p>Name: AJohn Smith</p>
//       <p>Phone Number: (555) 555 - 5555</p>
//       <p>Email: john.smith@ucalgary.ca</p>
//       <p>City: Calgary</p>
//       <div className="agentProfile_btns">
//         <Link to="/editProfile">
//           <Button label="Edit" />
//         </Link>

//       </div>
//     </div>
//   </div>
// );





const cards = [1]
const drawerWidth = 240;

const YourProfile = () => {
  //const classes = useStyles();
  return (
    <>
      <CssBaseline />
      {/*  >
        <Toolbar>
        <HomeIcon className={classes.icon}/>
          <Typography variant ='h6'>
            Real Estate Database
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        <div > 
          {/* className={classes.container} */}
          <Container maxWidth = "sm">
            <Typography variant="h2" align= "center" color ="textPrimary" gutterBottom>
              Your Profile
            </Typography>
            <Typography variant="h5" align= "center" color ="textSecondary" paragraph>
              Hello! Welcome to your profile. Here you can view and edit your information.
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md"> 
        {/* className={classes.cardGrid} */}
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
              <Card > 
                {/* className={classes.card} */}
                  <CardContent > 
                    {/* className={classes.cardContent} */}
                    <Typography gutterBottom variant="h5">
                      John Cena
                    </Typography>
                    <Typography>
                      This section will display a summary of John Cena
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"> View</Button>
                    <Button size="small" color="primary"> Edit</Button>
                  </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>

        </Container> 
      </main>
      <footer > 
{/* className={classes.footer} */}
        <Typography variant="h6" align= "center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSeconday">
          Something here to give the footer a purpose!
        </Typography>
      </footer>

    </>
  );
}

export default YourProfile;
