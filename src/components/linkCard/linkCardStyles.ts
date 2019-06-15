import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    head : {
      borderTop : '1px solid gainsboro',
      borderBottom : '1px solid gainsboro',
      '&:hover' : {
        backgroundColor : 'whitesmoke'
      }
    },
    content : {
      display : 'block',
      padding : '10px'
    },
    contentSubArea : {
      padding : '5px'
    },
    contentSubAreaTitle : {
      fontFamily : theme.typography.title.fontFamily,
      fontSize : '0.87rem',
      fontWeight : theme.typography.title.fontWeight,
      color : theme.typography.title.color
    },
    cardLink : {
      fontFamily : theme.typography.subtitle1.fontFamily,
      fontSize : '0.87rem',
      fontWeight : theme.typography.subtitle1.fontWeight,
      color : '#6c6c6c',
      textDecoration : 'none',
      width : '90%',
      display : 'block',
      padding : '10px',
      '&:hover' : {
        backgroundColor : 'whitesmoke'
      }
    },
    subLink : {
      margin : '5px',
      textDecoration : 'none',
      lineHeight : '50px'
    },
    subLinkChip : {
      [theme.breakpoints.down('sm')] : {
        width : '97%',
        overflow : 'hidden'
      }
    },
    nameLabel : {
      verticalAlign : 'middle',
      marginRight : '5px'
    },
    nameLabelText : {
      verticalAlign : 'middle'
    }
  });

export default styles;