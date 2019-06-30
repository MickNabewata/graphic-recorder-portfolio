import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 240;

const styles = (theme : Theme) => 
  createStyles({
    appBar: {
      [theme.breakpoints.up('md')]: {
        width:'100%',
      },
      backgroundImage : 'url("/appBar.jpg")',
      boxShadow : 'none'
    },
    menuButton: {
      marginRight: 20,
    },
    title:{
      [theme.breakpoints.up('md')]: {
        margin : '0 auto',
        fontSize : 30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 20
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      zIndex : -100,
      backgroundImage : 'url("/sideMenu.jpg")',
      overflowX : 'hidden'
    },
    content: {
      flexGrow: 1,
      padding: 0,
      backgroundColor : 'whiteSmoke',
      minHeight : '100vh',
      textAlign : 'center'
    },
    linkItem : {
      backgroundColor : 'whiteSmoke',
      opacity : 0.9,
      margin : '5px',
      padding : '5px',
      '&:hover' : {
        backgroundColor : 'silver'
      }
    },
    link : {
      textDecoration : 'none'
    },
    linkText : {
      fontSize : 14,
      color : theme.palette.secondary.dark
    },
    contactField : {
      backgroundColor : 'RGBA(255,255,255,0.7)',
      margin : '5px auto',
      padding : '10px',
      textAlign : 'center',
      width : '60%'
    },
    contactButton : {
      padding : 0,
      marginRight : '5px',
      marginLeft : '5px'
    },
    contactImage : {
      width : '100%',
      height : '100%'
    }
  });

export default styles;