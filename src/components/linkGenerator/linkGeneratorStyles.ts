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
    inputCard : {
      marginTop : 20,
      marginBottom : 20
    },
    inputFieldTitle : {
      fontSize : 25
    },
    inputField : {
      marginTop : '10px'
    },
    inputFieldDomain : {
      width : '280px',
      verticalAlign : 'bottom',
      [theme.breakpoints.down('sm')] : {
        width : '90%'
      }
    },
    inputFieldPreFix : {
      margin : '0px 10px',
      verticalAlign : 'bottom',
      minWidth : '85px',
      [theme.breakpoints.down('sm')] : {
        marginLeft : 0
      }
    },
    preFixMenu : {

    },
    inputFieldSite : {
      width : '150px',
      verticalAlign : 'bottom'
    },
    generateLink : {
      textDecoration : 'none'
    },
    generateButton : {
      marginLeft : '20px',
      [theme.breakpoints.down('sm')] : {
        marginLeft : 0,
        marginTop : '20px',
        display : 'block'
      }
    }
  });

export default styles;