import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {
  return createStyles({
    jobPaper : {
      padding: 4,
      marginBottom: 40
    },
    jobTitle : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 26
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 30
      },
      fontFamily : '"Sawarabi Mincho", sans-serif'
    },
    jobDescription : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 18
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      }
    },
    jobThumbnailButton : {
      margin : '0 auto',
      marginBottom : '5vh',
      padding : 0
    },
    jobThumbnail : {
      width : '100%',
      height : '100%'
    },
    showJobDetail : {
      display : 'flex',
      alignItems : 'center',
      position : 'absolute',
      top : 0,
      left : 0,
      width : '100%',
      height : '100%',
      background: 'rgba(255,255,255,0.8)'
    },
    showJobDetailText : {
      margin : '0 auto',
      color : 'rgb(44, 44, 44)'
    },
    disable : {
      display : 'none'
    },
    enable : {
      display : 'flex'
    }
  });
}

export default styles;