import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {
  return createStyles({
    jobPaper : {
      padding : theme.spacing.unit
    },
    jobTitle : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 26
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 30
      }
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
      margin : '0 auto'
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