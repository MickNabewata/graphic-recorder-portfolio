import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { Hidden } from '@material-ui/core';

const styles = (theme : Theme) => 
  createStyles({
    card : {
      [theme.breakpoints.down('sm')] : {

      },
      [theme.breakpoints.up('md')] : {
        width : '30%',
        float : 'left'
      },
      margin : '5px',
    },
    mediaArea : {
      height : '200px',
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
      position: 'relative',
      top: '50%',
      WebkitTransform : 'translateY(-50%)',
      msTransform : 'translateY(-50%)',
      transform: 'translateY(-50%)',
      maxHeight : '190px',
      overflow : 'hidden'
    },
    actionButtons : {
      width : '100%'
    },
    filterLink : {
      textDecoration : 'none'
    },
    filterDialog : {
      padding : '10px'
    }
  });

export default styles;