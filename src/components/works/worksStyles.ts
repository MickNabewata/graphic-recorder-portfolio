import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  return createStyles({
    root : {
      backgroundColor : 'white',
      minHeight : '100vh'
    },
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      height : '10vh',
      fontFamily : '"Muli Bold", sans-serif',
      borderTop : '8px solid gainsboro',
      backgroundColor : 'white'
    },
    head : {
      position : 'relative'
    },
    workGrid : {
      margin : '0px auto',
      width : '90%'
    },
    titleRelative : {
      position : 'inherit'
    },
    titleFixed : {
      position : 'fixed',
      top : 0,
      width : '100%',
      zIndex : 100
    },
    filterArea : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 20
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 30
      }
    },
    filter : {
      textDecoration : 'none',
      marginLeft : '20px',
      zIndex : 1000
    }
  });
}

export default styles;