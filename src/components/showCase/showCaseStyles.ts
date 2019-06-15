import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    wellcome : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 17
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      },
      lineHeight : 2
    },
    deleteLinkArea : {
      lineHeight : '40px'
    },
    deleteLink : {
      marginLeft : '5px',
      marginBottom : '5px',
      textDecoration : 'none'
    },
    cardArea : {
      marginTop : '10px'
    }
  });

export default styles;