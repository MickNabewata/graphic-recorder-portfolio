import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    root: {
      height: '100vh',
      position : 'relative'
    },
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily,
      color: 'white',
      position: 'absolute',
      bottom: 180,
      width: '100%'
    },
    hello : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 17
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      },
      lineHeight : 2,
      color: 'white',
      position: 'absolute',
      bottom: 80,
      width: '100%'
    },
    video : {
      width: '100%'
    },
    videoArea: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflowX: 'hidden',
      zIndex: -1
    }
  });

export default styles;