import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  return createStyles({
    workDialogPaper : {
      width : '80vw',
      height : '80vh',
      position : 'relative',
      overflow : 'hidden'
    },
    workDialogImageArea : {
      [theme.breakpoints.up('md')] : {
        width : '60%',
        height : '100%',
        position : 'absolute',
        left : 0
      },
      [theme.breakpoints.down('sm')] : {
        width : '100%',
        height : '40%',
        overflow : 'hidden'
      }
    },
    workDialogImage : {
      [theme.breakpoints.up('md')] : {
        height : '100%',
      },
      width : '100%'
    },
    workDialogContents : {
      width : '40%',
      height : '100%',
      position : 'absolute',
      right : 0
    },
    workDialogTitle : {
      fontFamily : '"Sawarabi Mincho", sans-serif'
    },
    workDialogActionArea : {
      justifyContent : 'flex-start',
      marginLeft : '8px'
    },
    tagLink : {
      textDecoration : 'none'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px'
    }
  });
}

const styles2 = (theme : Theme) => {

  return createStyles({
    dialogTitle : {
      fontFamily : '"Sawarabi Mincho", sans-serif'
    },
    workDialogImage : {
      [theme.breakpoints.up('md')] : {
        height : '30vh',
        minWidth : '550px'
      },
      [theme.breakpoints.down('sm')] : {
        height : '50vh',
        width : '100%'
      },
      color : 'black',
      backgroundColor : 'white',
      backgroundPosition : 'center'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px'
    },
    date : {
      fontSize : '1rem',
      paddingTop : '10px',
      paddingLeft : '24px'
    },
    tagLink : {
      textDecoration : 'none'
    },
  });
}

export default styles;