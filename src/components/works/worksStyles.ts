import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => {

  let toolbarHeight = `${theme.mixins.toolbar.minHeight}px`;
  let thumbnailHeight = '120px';
  let workTagsHeight = '40px';
  let parentMargin = '36px';

  return createStyles({
    root : {
      backgroundColor : '#f4f9ff'
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
    workGrid : {
      margin : '0 auto',
      [theme.breakpoints.down('sm')] : {
        width : '90vw'
      },
      [theme.breakpoints.up('md')] : {
        width : '95vw'
      }
    },
    workPaper : {
      padding : theme.spacing.unit
    },
    workCard : {
      height : '100%'
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
      height : thumbnailHeight
    },
    workContent : {
      height : `calc(100vh - ${toolbarHeight} - ${toolbarHeight} - ${thumbnailHeight} - ${workTagsHeight} - ${parentMargin})`
    },
    workTags : {
      height : workTagsHeight
    }
  });
}

export default styles;