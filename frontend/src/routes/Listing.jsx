import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';

const Listing = () => {

  const classes = useStyles();

  return (<div>
    
      <CssBaseline />
      <AppBar position = "relative">  {/* This is the navigation bar */}
          <Toolbar>
              <PhotoCamera>
                  <Typography variant = "h6">
                      Photo Album
                  </Typography>
              </PhotoCamera>
          </Toolbar>
      </AppBar>

      <main>

     <div className={classes.container}>
         <Container maxWidth="sm">
             <Typography variant = "h3" align = "center" color = "textPrimary" gutterBottom>
                 Photo Album
             </Typography>

             <Typography variant = "h5" align = "center" color = "textSecondary" paragraph>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum.
             </Typography>
             
             <div>
                 <Grid container spacing={2} justify = "center">

                      <Grid item>
                          <Button variant="contained" color="primary">
                              Agent
                          </Button>
                      </Grid>
                      <Grid item>
                          <Button variant="contained" color="primary">
                              Client
                          </Button>
                      </Grid>
                 </Grid>

                 
             </div>
         </Container>
     </div>

      <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing = {4}>
                  {cardList.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                          <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random">
                              
                          </CardMedia>
                          <CardContent className="class.cardContent">
                              <Typography variant="h5" gutterbottom>
                                  Postal Code: T32 2S5
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small" color= "primary">View</Button>
                              <Button size="small" color= "primary">Edit</Button>

                          </CardActions>
                      </Card>
                  </Grid>
              
                  ) )}
                 </Grid> 
      </Container>

      </main>
              <footer className = {classes.footer}>
                      <Typography variant = "h6" align = "center">
                          This is the footer
                      </Typography>

              </footer>
      </div>
      
  );
}
// const Listing = () => (
//   <div className="listing">
//     <h2>Your Listing</h2>
//     <div className="butn-listing">

//       <p>Number Of Bedrooms: 2</p>
//       <p>Number Of Bathrooms: 4</p>
//       <p>Yard Size: 1000 sqft</p>
//       <p>Neighbourhood: Spring Bank</p>
//       <p>Asking Price: $100000 </p>
//       <p>Garage Size: 2 Car Garage</p>
//       <p>Address: 2B Kensignton ave Calgary, Alberta, T3B 6G6</p>
//       {/* {Address = `${street_num} ${street_name}, ${city}, ${province}, ${postal_code}`} */}
//       <p>Year Built: 2006</p>
//       <p>Total Sq Feet: 3000 sqft</p>
//       <p>Listing Date: 12/05/2021</p>
//       <p></p>
//       <Link to="/editListing">
//         <Button label="Edit" />
//       </Link>


//     </div>
//   </div>
// );

export default Listing;
