import React from 'react';
import styles from './workDialogStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles';
import { IWork } from '../../datas/workData';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
};

/** コンポーネント定義 */
class WorkDialog extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** ダイアログクローズ */
  handleDialogClose = () => {
    if(this.props.onClose) this.props.onClose();
  }

  /** レンダリング */
  render() {
    let work = this.props.work;
    let fullScreen = (this.props.theme.breakpoints.values.sm >= window.innerWidth);

    return (
      <Dialog
        maxWidth='xl'
        open={this.props.opened}
        onClose={this.props.onClose}
        aria-labelledby={`WorkDialog-${work.title}`}>
        <div className={this.props.classes.workDialogPaper} >
          <div className={this.props.classes.workDialogImageArea}>
            <img src={work.thumbnailUrl} className={this.props.classes.workDialogImage} />
          </div>
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
                        to={`${location.pathname}?tag=${tag}`}
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
      </Dialog>
    );
  }

  /** レンダリング */
  /*
  render() {
    let work = this.props.work;
    let fullScreen = (this.props.theme.breakpoints.values.sm >= window.innerWidth);

    return (
      <Dialog
        fullScreen={fullScreen}
        open={this.props.opened}
        onClose={this.props.onClose}
        aria-labelledby={`WorkDialog-${work.title}`}>
        <DialogTitle id={`WorkDialogTitle-${work.title}`}>
          <span className={this.props.classes.dialogTitle}>{work.title}</span>
          {(fullScreen) ?
            <IconButton
              color='inherit'
              aria-label='Close Dialog'
              onClick={this.props.onClose}
              className={this.props.classes.closeButton}
            >
              <CloseIcon />
            </IconButton> :
            ''}
        </DialogTitle>
        <div className={this.props.classes.workDialogImage} style={{ backgroundImage : `url("${work.thumbnailUrl}")` }} />
        <Typography component='p' gutterBottom className={this.props.classes.date}>{work.date}</Typography>
        <DialogContent>
          <DialogContentText>{work.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <div>
            {work.tags.map((tag, i) => {
              return (
                (tag)?
                  <Link
                    to={`${location.pathname}?tag=${tag}`}
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
      </Dialog>
    );
  }*/
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkDialog);