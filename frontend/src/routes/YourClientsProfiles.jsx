import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import { Typography, AppBar, Grid, Card, CardContent, CardActions, CardMedia, CssBaseline, Grib, Toolbar, Container } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from '../jstyles.jsx';

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
  const classes  = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon className={classes.icon}/>
          <Typography variant ='h6'>
            Real Estate Database
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth = "sm">
            <Typography variant="h2" align= "center" color ="textPrimary" gutterBottom>
              Client Profiles
            </Typography>
            <Typography variant="h5" align= "center" color ="textSecondary" paragraph>
              Hello! Welcome to all your clients profiles.
            </Typography>
            <div className={classes.buttons}>
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
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
      <footer className={classes.footer}>
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
