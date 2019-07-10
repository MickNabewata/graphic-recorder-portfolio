import React from 'react';
import styles from './jobCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { IJob } from '../../datas/jobData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ジョブデータ */
  job: IJob;
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class JobCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** サムネイルへのマウスオーバー */
  jobMouseOver = (elementId : string) => () => {
    let content = document.getElementById(elementId);
    if(content)
    {
      content.className = `${this.props.classes.showJobDetail} ${this.props.classes.enable}`;
    }
  }

  /** サムネイルからのマウスアウト */
  jobMouseOut = (elementId : string) => () => {
    let content = document.getElementById(elementId);
    if(content)
    {
      content.className = `${this.props.classes.showJobDetail} ${this.props.classes.disable}`;
    }
  }

  /** レンダリング */
  render() {
    return (
      <Grid item xs={12} md={3} key={`JobPaper-${this.props.job.title}`} >
        <Paper elevation={0} className={this.props.classes.jobPaper} >
          <section>
            <Typography component='h3' className={this.props.classes.jobTitle}>
              <IconButton
                color='inherit'
                aria-label='Slider'
                className={this.props.classes.jobThumbnailButton}
                onMouseOver={this.jobMouseOver(`showJobDetail-${this.props.job.title}`)}
                onMouseOut={this.jobMouseOut(`showJobDetail-${this.props.job.title}`)}
              >
                <Avatar src={this.props.job.thumbnailUrl} className={this.props.classes.jobThumbnail} />
                <div id={`showJobDetail-${this.props.job.title}`} className={`${this.props.classes.showJobDetail} ${this.props.classes.disable}`} >
                  <div className={this.props.classes.showJobDetailText}>作品を見る</div>
                </div>
              </IconButton>
              {this.props.job.title}
            </Typography>
            <div>
              {this.props.job.description.map((description, i) => {
                return (
                  <Typography 
                    component='p' 
                    className={this.props.classes.jobDescription} 
                    key={`jobDescription-${this.props.job.title}-${i}`}>
                      {description}
                  </Typography>);
              })}
            </div>
          </section>
        </Paper>
      </Grid>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(JobCard);