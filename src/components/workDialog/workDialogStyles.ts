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
    workDialogMobileImageArea: {
      position: 'relative',
      width: '100%',
      height: '40%',
      overflow: 'hidden'
    },
    workDialogImageArea : {
      [theme.breakpoints.up('md')] : {
        width : '60%',
        height : '100%'
      },
      [theme.breakpoints.down('sm')] : {
        width : '100%',
        height : '100%'
      },
      position: 'absolute',
      top: 0,
      left : 0
    },
    workDialogImage : {
      [theme.breakpoints.up('md')] : {
        height: '100%'
      },
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    imageSlider: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      width: '100%',
      textAlign: 'center',
      zIndex: 200
    },
    imageSliderButton: {
      color: 'whitesmoke'
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

export default styles;