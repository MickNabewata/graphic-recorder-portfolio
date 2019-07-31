import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    root: {
      backgroundColor : 'white',
      minHeight : 'calc(100vh - 14px)',
      borderTop : '8px solid gainsboro',
    },
    toolbar: theme.mixins.toolbar,
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      height : '10vh',
      fontFamily : '"Muli Bold", sans-serif',
      backgroundColor : 'white'
    },
    content : {
      height : `calc(90vh - ${theme.mixins.toolbar.minHeight}px - 29px)`,
      position : 'relative'
    },
    container : {
      [theme.breakpoints.up('md')] : {
        height : '70%',
        width : '90%',
        position : 'absolute',
        margin : 'auto',
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        backgroundColor : 'whitesmoke'
      },
      [theme.breakpoints.down('sm')] : {
        width : '100%',
        height : '100%'
      }
    },
    subContainer : {
      height : '70%',
      width : '70%',
      position : 'absolute',
      margin : 'auto',
      top : 0,
      left : 0,
      bottom : 0,
      right : 0
    },
    imageArea : {
      display : 'inline-flex',
      width : '50%',
      height : '100%'
    },
    image : {
      width : '100%',
      height : '100%'
    },
    textArea : {
      display : 'inline-flex',
      width : '50%',
      height : '100%',
      position : 'relative',
      paddingLeft : '30px',
      textAlign : 'left'
    },
    textAreaContainer : {
      position : 'absolute'
    },
    name : {
      [theme.breakpoints.up('md')]: {
        fontSize : 30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 20
      },
      fontFamily : '"Muli Bold", sans-serif'
    },
    nameRubi : {
      [theme.breakpoints.up('md')]: {
        fontSize : 24
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 22
      },
      marginLeft : '10px'
    },
    description : {
      [theme.breakpoints.up('md')]: {
        fontSize : 20
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 18
      },
    }
  });

export default styles;