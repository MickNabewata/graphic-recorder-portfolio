import React from 'react';
import styles from './workDialogStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles';
import { IWork } from '../../datas/workData';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {

  /** ジョブデータ */
  work: IWork;

  /** テーマ */
  theme: Theme;

  /** 表示有無 */
  opened: boolean;

  /** クローズハンドラ */
  onClose: () => void;
}

/** ステート型定義 */
type State = {
  /** 現在表示中の画像URL */
  imageSrc: string
};

/** コンポーネント定義 */
class WorkDialog extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    const firstImageSrc = (props.work.thumbnailUrl && props.work.thumbnailUrl.length > 0) ? props.work.thumbnailUrl[0] : '/NoImage.jpg';
    this.state = {
      imageSrc: firstImageSrc
    };
  }

  /** ダイアログクローズ */
  handleDialogClose = () => {
    if(this.props.onClose) this.props.onClose();
  }

  /** 次の画像へスライド */
  slide = (imageSrc: string) => () => { 
    this.setState({ imageSrc: imageSrc });
  }

  /** サムネイル画像描画 */
  renderThumbnail(work: IWork) {
    return (
      <div className={this.props.classes.workDialogImageArea}>
        {
          (work.thumbnailUrl && work.thumbnailUrl.length > 0) ?
            (work.thumbnailUrl.length > 1) ?
              <React.Fragment>
                {
                  work.thumbnailUrl.map((thumbnailUrl, i) => {
                    return (
                      <Slide
                        timeout={(thumbnailUrl === this.state.imageSrc)? 0 : 1000}
                        direction={'left'}
                        in={(thumbnailUrl === this.state.imageSrc)}
                        style={{ zIndex: (thumbnailUrl === this.state.imageSrc)? 0 : 100 }}
                        key={`workDialogImageSlide-${work.title}-${i}`}>
                        <img src={thumbnailUrl} alt={work.title} className={this.props.classes.workDialogImage} />
                      </Slide>
                    );
                  })
                }
                <div className={this.props.classes.imageSlider}>
                  {
                    work.thumbnailUrl.map((thumbnailUrl, i) => {
                      return (
                        <Radio
                          name={this.props.classes.imageSliderButton}
                          color='default'
                          className={this.props.classes.imageSliderButton}
                          value={thumbnailUrl}
                          onChange={this.slide(thumbnailUrl)}
                          checked={(thumbnailUrl === this.state.imageSrc)}
                          key={`${this.props.classes.imageSliderButton}-${i}`}
                        />
                      );
                    })
                  }
                </div>
              </React.Fragment>:
              <img src={work.thumbnailUrl[0]} alt={work.title} className={this.props.classes.workDialogImage} /> :
            <img src='/NoImage.jpg' alt={work.title} className={this.props.classes.workDialogImage} />
        }
      </div>
    );
  }

  /** 画面幅に従い描画 */
  renderWideScreen(work: IWork) {
    return (
      <div className={this.props.classes.workDialogPaper} >
        {this.renderThumbnail(work)}
        <div className={this.props.classes.workDialogContents}>
          <DialogTitle className={this.props.classes.workDialogTitle}>{work.title}</DialogTitle>
          <DialogContent>
            {(work.description.map((desc, i) => {
              return <DialogContentText gutterBottom key={`work-${work.title}-desc-${i}`}>{desc}</DialogContentText>
            }))}
            <DialogContentText>{work.date}</DialogContentText>
          </DialogContent>
          <DialogActions className={this.props.classes.workDialogActionArea}>
            <div>
              {work.tags.map((tag, i) => {
                return (
                  (tag)?
                    <Link
                      to={`${window.location.pathname}?tag=${tag}`}
                      className={this.props.classes.tagLink}
                      key={`work-${work.title}-tag-${i}`}>
                      <Button
                        size='small'
                        color='primary'
                        onClick={this.handleDialogClose}
                        key={`workDialogTag-${work.title}-${i}`}>
                        {tag}
                      </Button>
                    </Link>:
                    ''
                )
              })}
            </div>
          </DialogActions>
        </div>
      </div>
    );
  }

  /** フルスクリーンで描画 */
  renderFullScreen(work : IWork) {
    return (
      <React.Fragment>
        <DialogTitle id={`WorkDialogTitle-${work.title}`}>
          <span className={this.props.classes.workDialogTitle}>{work.title}</span>
          <IconButton
            color='inherit'
            aria-label='Close Dialog'
            onClick={this.props.onClose}
            className={this.props.classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div className={this.props.classes.workDialogMobileImageArea}>
          {this.renderThumbnail(work)}
        </div>
        <DialogContent>
          <DialogContentText>{work.date}</DialogContentText>
          <DialogContentText>{work.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <div>
            {work.tags.map((tag, i) => {
              return (
                (tag)?
                  <Link
                    to={`${window.location.pathname}?tag=${tag}`}
                    className={this.props.classes.tagLink}
                    key={`work-${work.title}-tag-${i}`}>
                    <Button
                      size='small'
                      color='primary'
                      onClick={this.handleDialogClose}
                      key={`workDialogTag-${work.title}-${i}`}>
                      {tag}
                    </Button>
                  </Link>:
                  <React.Fragment key={`work-frag-${work.title}-tag-${i}`} />
              )
            })}
          </div>
        </DialogActions>
      </React.Fragment>
    );
  }

  /** レンダリング */
  render() {
    let work = this.props.work;
    let fullScreen = (this.props.theme.breakpoints.values.sm >= window.innerWidth);

    return (
      <Dialog
        fullScreen={fullScreen}
        maxWidth='xl'
        open={this.props.opened}
        onClose={this.props.onClose}
        aria-labelledby={`WorkDialog-${work.title}`}>
        {(fullScreen)? this.renderFullScreen(work) : this.renderWideScreen(work)}
      </Dialog>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkDialog);