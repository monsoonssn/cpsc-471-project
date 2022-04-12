

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroiundColor: theme.palette.background.paper, 
      padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        margintTop: '40px'
    },
    cardGrid: {
      padding: '20pxx 0'
    },
    card: {
      height: '100%',
      display: 'flex',
      felxDirection: 'column'
    },
    cardContent: {
      flewGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.papaer, padding: '50px 0'
    }
  }));

  

  export default useStyles;