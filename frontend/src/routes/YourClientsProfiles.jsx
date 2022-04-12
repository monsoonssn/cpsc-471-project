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


// const YourClientsProfiles = () => (
//   <div className="clientProfile">
//     <div className="clientProfile_content">
//       <h1>Your Profile</h1>
//       <p>Name: CJohn Smith</p>
//       <p>Type: Buyer</p>
//       <p>Phone Number: (555) 555 - 5555</p>
//       <p>Email: john.smith@ucalgary.ca</p>
//       <p>City: Calgary</p>
//       <div className="clientProfile_btns">
//         <Link to="/editProfile">
//           <Button label="Edit" />
//         </Link>

//       </div>
//     </div>
//   </div>
// );

// export default YourClientsProfiles;



const cards = [1,2,3,4,5,6,7,8,9]

const YourClientsProfiles = () => {
  // const classes  = useStyles();
  return (
    
    <>
      <CssBaseline />
      <main>
        <div >
          {/* className={classes.container} */}
          <Container maxWidth = "sm">
            <Typography variant="h2" align= "center" color ="textPrimary" gutterBottom>
              Client Profiles
            </Typography>
            <Typography variant="h5" align= "center" color ="textSecondary" paragraph>
              Hello! Welcome to all your clients profiles.
            </Typography>
            <div >
              {/* className={classes.buttons} */}
              <Grid container spacing ={2} justify="center">
                <Grid item>
                  <Button variant = "outlined" color = "primary">
                  Refine Search
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container  maxWidth="md">
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

export default YourClientsProfiles;
