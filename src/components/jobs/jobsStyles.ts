import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  let toolbarHeight = `${theme.mixins.toolbar.minHeight}px`;
  let parentMargin = '36px';

  return createStyles({
    root : {
      backgroundColor : '#f4fff4'
    },
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    jobGrid : {
      margin : '0 auto',
      [theme.breakpoints.down('sm')] : {
        width : '90vw'
      },
      [theme.breakpoints.up('md')] : {
        width : '95vw'
      }
    },
    jobGridSlider : {
      [theme.breakpoints.down('sm')] : {
        display : 'none'
      }
    },
    jobGridBody : {
      margin : '0 auto'
    },
    jobPaper : {
      height : `calc(100vh - ${toolbarHeight} - ${toolbarHeight} - ${parentMargin})`,
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
    jobThumbnail : {
      width : '100%',
      height : '300px',
      margin : '0 auto'
    }
  });
}

export default styles;