import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    hello : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 17
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      },
      lineHeight : 2
    },
    video : {
      [theme.breakpoints.down('sm')] : {
        maxWidth : "80vw"
      },
      [theme.breakpoints.up('md')] : {
        maxHeight : "60vh"
      },
      
    }
  });

export default styles;