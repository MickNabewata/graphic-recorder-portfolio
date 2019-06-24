import React from 'react';
import styles from './helloStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Hello extends React.Component<Prop, State> {

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
        <React.Fragment>
          <Typography component='h1' gutterBottom className={this.props.classes.title}>
            Thank you checking my fortloio !
          </Typography>
          <br />
          <Typography component='p' className={this.props.classes.hello}>
            当サイトへお越し頂きまして誠にありがとうございます。<br />
            このサイトはグラフィックレコーダー 永井結子のポートフォリオサイトです。
          </Typography>
          <div>
            <video src="hello.mp4" preload="auto" controls className={this.props.classes.video} />
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Hello);