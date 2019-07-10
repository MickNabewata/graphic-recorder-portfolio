import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  return createStyles({
    workPaper : {
      height : 'calc(90vh / 2)'
    },
    workCard : {
      height : '100%'
    },
    workActionArea : {
      height : '90%',
      position : 'relative'
    },
    workTitle : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 22
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 26
      }
    },
    workDescription : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 16
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 18
      }
    },
    workThumbnail : {
      width : '100%',
      height : '100%'
    },
    workContent : {
      position : 'absolute',
      top : 0,
      left : 0,
      width : '100%',
      height : '100%',
      background: 'rgba(255,255,255,0.8)'
    },
    workTags : {
      height : '10%'
    },
    disable : {
      display : 'none'
    },
    enable : {
      display : 'block'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px'
    }
  });
}

export default styles;