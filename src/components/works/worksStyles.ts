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
    workGrid : {
      margin : '0px auto',
      width : '90%'
    }
  });
}

export default styles;