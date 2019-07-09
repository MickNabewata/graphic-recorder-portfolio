import React from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import WorkData, { IWork } from '../../datas/workData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Works extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** ジョブデータ取得 */
  getWorks() : IWork[] {
    return new WorkData().get();
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

  /** レンダリング */
  render() {
    let works = this.getWorks();

    return (
      <section className={this.props.classes.root} id='Works' >
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
          Works
        </Typography>
        <div>
          <Grid container spacing={40} className={this.props.classes.workGrid} justify='center' alignItems='center' >
            { works.map((work, i) => {
              return (
                <Grid item xs={12} md={3} className={this.props.classes.workPaper} key={`WorkPaper-${work.title}`} >
                  <Card elevation={0} className={this.props.classes.workCard}>
                    <CardActionArea className={this.props.classes.workActionArea} onMouseOver={this.cardMouseOver(`cardContent-${i}`)} onMouseOut={this.cardMouseOut(`cardContent-${i}`)} >
                      <CardMedia
                        image={work.thumbnailUrl}
                        className={this.props.classes.workThumbnail} />
                      <CardContent id={`cardContent-${i}`} className={`${this.props.classes.workContent} ${this.props.classes.disable}`}>
                        <section>
                          <Typography component='h3' gutterBottom className={this.props.classes.workTitle}>
                            {work.title}
                          </Typography>
                          <div>
                            {work.description.map((description, i) => {
                              return <Typography component='p' className={this.props.classes.workDescription} key={`workDescription-${work.title}-${i}`}>{description}</Typography>;
                            })}
                          </div>
                        </section>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={this.props.classes.workTags}>
                      {work.tags.map((tag) => {
                        return <Button size='small' color='primary' key={`workTag-${tag}`}>{tag}</Button>
                      })}
                    </CardActions>
                  </Card>
                </Grid>
              )
            }) }
          </Grid>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);