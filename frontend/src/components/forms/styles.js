import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>(
    {
        container:{
            backgroundColor: theme.palette.background.paper ,
            padding: theme.spacing(8, 0, 6)
        },

    cardGrid:{
        padding: "15px"
    },
    card:{
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia:{
        paddingTop: "56.25%"
    },
    cardContent:{
        flexGrow: 1
    },
    footer:{
        padding: "15px"
    }
}));

export default useStyles;