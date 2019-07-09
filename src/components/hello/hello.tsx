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
    let videoUri = 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/hello.mp4?alt=media&token=402894e4-0f9e-48ab-aa2a-e76aed5e6231';
    return (
      <section id='Hello' className={this.props.classes.root} >
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
          視覚領域　可視化　～～を～～へ
        </Typography>
        <div>
          <Typography component='p' className={this.props.classes.hello}>
            当サイトへお越し頂きまして誠にありがとうございます。<br />
            このサイトはグラフィックレコーダー 永井結子のポートフォリオサイトです。
          </Typography>
          <div className={this.props.classes.videoArea}>
            <video src={videoUri} autoPlay loop playsInline muted className={this.props.classes.video} />
          </div>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Hello);