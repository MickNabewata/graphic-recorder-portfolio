import React from 'react';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import { Typography } from '@material-ui/core';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
interface State {
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** レンダリング */
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography component='h1' color='inherit' className={this.props.classes.title} noWrap>
          Yuiko Nagai
        </Typography>
        <div className={this.props.classes.body}>
          <div className={this.props.classes.imgArea}>
            <img alt='工事中' src='https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/Closed.png?alt=media&token=4833fccf-3904-452f-a6a7-9d59e7a0581a' className={this.props.classes.img} />
          </div>
        </div>
      </div>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));