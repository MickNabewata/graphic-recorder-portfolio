import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 240;

const styles = (theme : Theme) => 
  createStyles({
    appBar: {
      backgroundColor : 'transparent',
      boxShadow : 'none',
      pointerEvents : 'none',
      fontFamily : theme.typography.fontFamily
    },
    menuButton: {
      marginRight: 20,
      pointerEvents : 'auto'
    },
    title:{
      [theme.breakpoints.up('md')]: {
        fontSize : 30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 20
      },
      fontFamily : "'Muli Bold', sans-serif",
      width : '100%',
      textAlign : 'right'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      zIndex : -100,
      overflowX : 'hidden',
      backgroundColor : 'rgba(255, 255, 255, 0.1)'
    },
    content: {
      flexGrow: 1,
      padding: 0,
      minHeight : '100vh',
      textAlign : 'center',
      fontFamily : theme.typography.fontFamily
    },
    linkItem : {
      backgroundColor : 'whiteSmoke',
      opacity : 0.9,
      margin : '5px',
      padding : '5px',
      '&:hover' : {
        backgroundColor : 'silver'
      },
      pointerEvents : 'auto'
    },
    link : {
      textDecoration : 'none'
    },
    linkText : {
      fontSize : 14,
      color : theme.palette.secondary.dark
    },
    navigateButton : {
      position : 'fixed',
      zIndex : 1100,
      right : '20px',
      bottom : '20px'
    },
    navigateIcon : {
      fontSize : '50px'
    },
    white: {
      color: 'white'
    },
    black: {
      color: 'black'
    },
    enable: {
      display: 'block'
    },
    disable: {
      display : 'none'
    },
    translate : {
      [theme.breakpoints.up('md')]: {
        color: 'black'
      },
      [theme.breakpoints.down('sm')]: {
        display : 'none'
      },
    }
  });

export default styles;