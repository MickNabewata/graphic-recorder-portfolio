import React from 'react';
import styles from './workCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { IWork } from '../../datas/workData';
import WorkDialog from '../workDialog/workDialog';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ジョブデータ */
  work: IWork;
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
  }

  /** レンダリング */
  render() {
    let work = this.props.work;

    return (
      <Grid item xs={12} md={3} className={this.props.classes.workPaper} key={`WorkPaper-${work.title}`} >
        <Card elevation={0} className={this.props.classes.workCard}>
          <CardActionArea
            className={this.props.classes.workActionArea}
            onClick={this.handleDialogOpen}
            onMouseOver={this.cardMouseOver(`cardContent-${work.title}`)}
            onMouseOut={this.cardMouseOut(`cardContent-${work.title}`)} >
            <CardMedia
              image={(work.thumbnailUrl && work.thumbnailUrl.length > 0) ? work.thumbnailUrl[0] : '/NoImage.jpg'}
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
          <div className={this.props.classes.workActionSpace} />
          <CardActions className={this.props.classes.workTags}>
            {work.tags.slice(0,3).map((tag, i) => {
              return (
                (tag)?
                  <Link
                    to={`${window.location.pathname}?tag=${tag}`}
                    className={this.props.classes.tagLink}
                    key={`work-${work.title}-tag-${i}`}>
                    <Button
                      size='small'
                      color='primary'
                      onClick={this.handelTagClick(tag)}
                      key={`workTag-${i}`}>
                        {tag}
                    </Button>
                  </Link>:
                  <React.Fragment key={`work-frag-${work.title}-tag-${i}`} />
              )
            })}
          </CardActions>
        </Card>
        <WorkDialog
          work={work}
          opened={this.state.dialogOpened}
          onClose={this.handleDialogClose} />
      </Grid>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkCard);