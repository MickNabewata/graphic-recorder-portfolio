import React from 'react';
import styles from './aboutMeStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** テーマ */
  theme: Theme;
}

/** ステート型定義 */
type State = {
  /** 入力値 */
  inputValue : string;
};

/** コンポーネント定義 */
class AboutMe extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      inputValue : ''
    };
  }

  handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ inputValue : event.target.value });
  };

  /** 画面幅に従って描画 */
  renderWideScreen() {
    return (
      <div className={this.props.classes.subContainer} >
        <div className={this.props.classes.imageArea}>
          <img 
            src='https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/AboutMe.png?alt=media&token=8212fdbd-2d6f-4a63-bc03-1a1873e085d2'
            alt='aboutMe'
            className={this.props.classes.image} />
        </div>
        <div className={this.props.classes.textArea}>
          <div className={this.props.classes.textAreaContainer}>
            <Typography component='h3' className={this.props.classes.name} gutterBottom>
              永井 結子
              <span className={this.props.classes.nameRubi}>Nagai Yuiko</span>
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  /** フルスクリーンで描画 */
  renderFullScreen() {
    return (
      <React.Fragment>
        <div className={this.props.classes.imageArea}>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/AboutMe.png?alt=media&token=8212fdbd-2d6f-4a63-bc03-1a1873e085d2'
            alt='aboutMe'
            className={this.props.classes.image} />
        </div>
        <div className={this.props.classes.textArea}>
          <div className={this.props.classes.textAreaContainer}>
            <Typography component='h3' className={this.props.classes.name} gutterBottom>
              永井 結子
              <span className={this.props.classes.nameRubi}>Nagai Yuiko</span>
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
            <Typography component='p' className={this.props.classes.description}>
              説明が入ります
            </Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }

  /** レンダリング */
  render() {
    
    let fullScreen = (this.props.theme.breakpoints.values.sm >= window.innerWidth);

    return (
      <section id='AboutMe' className={this.props.classes.root} >
        <div className={this.props.classes.toolbar} />
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
        AboutMe
        </Typography>
        <div className={this.props.classes.content}>
          <div className={this.props.classes.container}>
            <Hidden mdUp={false} smDown={true} >
              {this.renderWideScreen()}
            </Hidden>
            <Hidden mdUp={true} smDown={false} >
              {this.renderFullScreen()}
            </Hidden>
          </div>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(AboutMe);