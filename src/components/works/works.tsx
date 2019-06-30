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

  /** レンダリング */
  render() {
    let works = this.getWorks();

    return (
      <section className={this.props.classes.root} id='Works' >
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
          Works
        </Typography>
        <div>
          <Grid container spacing={16} className={this.props.classes.workGrid} justify='center' alignItems='center' >
            { works.map((work) => {
              return (
                <Grid item xs={12} md={4} className={this.props.classes.workPaper} key={`WorkPaper-${work.title}`} >
                  <Card className={this.props.classes.workCard}>
                    <CardActionArea >
                      <CardMedia
                        title={work.title}
                        image={work.thumbnailUrl}
                        className={this.props.classes.workThumbnail} />
                      <CardContent className={this.props.classes.workContent}>
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