import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  return createStyles({
    workPaper : {
      height : 'calc(87vh / 2)'
    },
    workCard : {
      height : '100%'
    },
    workActionArea : {
      height : '89%',
      position : 'relative'
    },
    workActionSpace : {
      minHeight : '1%'
    },
    workTitle : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 22
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 26
      },
      fontFamily : '"Sawarabi Mincho", sans-serif'
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
      background: 'rgba(255,255,255,0.8)',
      overflow : 'hidden'
    },
    workTags : {
      marginTop : '5px',
      height : '10%'
    },
    tagLink : {
      textDecoration : 'none'
    },
    disable : {
      display : 'none'
    },
    enable : {
      display : 'block'
    }
  });
}

export default styles;