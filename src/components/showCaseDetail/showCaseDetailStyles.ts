import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { auth } from 'firebase';

const styles = (theme : Theme) => 
  createStyles({
    nodata : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 17
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      },
      lineHeight : 2
    },
    card : {
      margin : '5px',
    },
    mediaArea : {
      background: `
        linear-gradient(
          90deg,
          rgba(208, 147, 82, 0.6),
          rgba(192, 134, 70, 0.6) 60%,
          rgba(208, 147, 82, 0.6)
        ),
        repeating-radial-gradient(
          ellipse at 60% 500%,
          #c08646,
          #c08646 0.2%,
          #d09352 0.6%,
          #d09352 1%
        );
      `,
      backgroundImage : '-webkit-repeating-radial-gradient(-1000px 100px,ellipse,burlywood 10px,wheat 40px,burlywood 50px,wheat 120px,burlywood 130px);!important;',
      padding : '5px'
    },
    media : {
      margin : '0 auto',
      maxWidth : '100%'
    },
    actionButtons : {
      width : '100%'
    },
    filterLink : {
      textDecoration : 'none'
    }
  });

export default styles;