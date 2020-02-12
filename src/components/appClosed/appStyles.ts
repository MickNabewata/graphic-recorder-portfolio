import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    root: {
      padding: 10,
      height: '100vh',
      overflow: 'hidden'
    },
    title: {
      [theme.breakpoints.up('md')]: {
        fontSize: 30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20
      },
      fontFamily: "'Muli Bold', sans-serif",
      width: '100%',
      height: '30%',
      textAlign: 'right',
      overflow: 'hidden'
    },
    body: {
      textAlign: 'center',
      height: '70%',
      overflow: 'hidden'
    },
    imgArea: {
      position: 'absolute',
      width: 'calc(-20px + 100%)'
    },
    img: {
      marginBottom: 20,
      [theme.breakpoints.up('md')]: {
        width: '400px'
      },
      [theme.breakpoints.down('sm')]: {
        width: '300px'
      }
    }
  });

export default styles;