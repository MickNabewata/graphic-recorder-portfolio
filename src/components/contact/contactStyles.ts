import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    root: {
      backgroundColor : 'white',
      minHeight : '100vh',
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
      height : `calc(90vh - ${theme.mixins.toolbar.minHeight}px)`,
      position : 'relative'
    },
    container : {
      height : '80%',
      width : '60%',
      position : 'absolute',
      margin : 'auto',
      top : 0,
      left : 0,
      bottom : 0,
      right : 0
    },
    textField : {
      width : '100%'
    },
    buttonArea : {
      textAlign : 'right'
    }
  });

export default styles;