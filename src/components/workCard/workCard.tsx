import React from 'react';
import styles from './workCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { IWork } from '../../datas/workData';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ジョブデータ */
  work: IWork;

  /** テーマ */
  theme: Theme;
}

/** ステート型定義 */
type State = {
  /** ダイアログ表示有無 */
  dialogOpened: boolean;
};

/** コンポーネント定義 */
class WorkCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      dialogOpened: false
    };
  }

  /** カードへのマウスオーバー */
  cardMouseOver = (elementId : string) => () => {
    let content = document.getElementById(elementId);
    if(content)
    {
      content.className = `${this.props.classes.workContent} ${this.props.classes.enable}`;
    }
  }

  /** カードからのマウスアウト */
  cardMouseOut = (elementId : string) => () => {
    let content = document.getElementById(elementId);
    if(content)
    {
      content.className = `${this.props.classes.workContent} ${this.props.classes.disable}`;
    }
  }

  /** ダイアログ表示 */
  handleDialogOpen = () => {
    this.setState({ dialogOpened: true });
  }

  /** ダイアログ非表示 */
  handleDialogClose = () => {
    this.setState({ dialogOpened: false });
  }

  /** タグクリック */
  handelTagClick = (tag : string) => () => {
    this.handleDialogClose();
    alert(tag);
  }

  /** レンダリング */
  render() {
    let work = this.props.work;
    let fullScreen = (this.props.theme.breakpoints.values.sm >= window.innerWidth);

    return (
      <Grid item xs={12} md={3} className={this.props.classes.workPaper} key={`WorkPaper-${work.title}`} >
        <Card elevation={0} className={this.props.classes.workCard}>
          <CardActionArea
            className={this.props.classes.workActionArea}
            onClick={this.handleDialogOpen}
            onMouseOver={this.cardMouseOver(`cardContent-${work.title}`)}
            onMouseOut={this.cardMouseOut(`cardContent-${work.title}`)} >
            <CardMedia
              image={work.thumbnailUrl}
              className={this.props.classes.workThumbnail} />
            <CardContent id={`cardContent-${work.title}`} className={`${this.props.classes.workContent} ${this.props.classes.disable}`}>
              <section>
                <Typography component='h3' gutterBottom className={this.props.classes.workTitle}>
                  {work.title}
                </Typography>
                <div>
                  {work.description.map((description, i) => {
                    return (
                      <Typography
                        component='p'
                        className={this.props.classes.workDescription}
                        key={`workDescription-${work.title}-${i}`}>
                          {description}
                      </Typography>);
                  })}
                </div>
              </section>
            </CardContent>
          </CardActionArea>
          <CardActions className={this.props.classes.workTags}>
            {work.tags.map((tag) => {
              return (
                <Button
                  size='small'
                  color='primary'
                  onClick={this.handelTagClick(tag)}
                  key={`workTag-${tag}`}>
                    {tag}
                </Button>
              )
            })}
          </CardActions>
        </Card>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.dialogOpened}
          onClose={this.handleDialogClose}
          aria-labelledby={`WorkDialog-${work.title}`}>
          <DialogTitle id={`WorkDialogTitle-${work.title}`}>
            {work.title}
            {(fullScreen) ?
              <IconButton
                color='inherit'
                aria-label='Close Dialog'
                onClick={this.handleDialogClose}
                className={this.props.classes.closeButton}
              >
                <CloseIcon />
              </IconButton> :
              ''}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{work.date}</DialogContentText>
            <DialogContentText>{work.description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {work.tags.map((tag) => {
              return (
                <Button
                  size='small'
                  color='primary'
                  onClick={this.handelTagClick(tag)}
                  key={`workDialogTag-${work.title}-${tag}`}>
                    {tag}
                </Button>
              )
            })}
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkCard);