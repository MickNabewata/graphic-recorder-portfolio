import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {
  return createStyles({
    root : {
      backgroundColor : 'white',
      borderTop : '8px solid gainsboro'
    },
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      height : '10vh',
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    jobContents : {
      margin : '0 auto',
      width : '100%',
      display : 'flex',
      [theme.breakpoints.up('md')] : {
        height : '90vh'
      }
    },
    jobGrid : {
      margin : '0 auto',
      width : '100%'
    },
    jobGridSlider : {
      [theme.breakpoints.down('sm')] : {
        display : 'none'
      }
    },
    jobGridBody : {
      margin : '0 auto'
    },
    slideIcon : {
      fontSize : '50px'
    }
  });
}

export default styles;