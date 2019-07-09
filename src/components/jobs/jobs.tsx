import React from 'react';
import styles from './jobsStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import JobData, { IJob } from '../../datas/jobData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Jobs extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** ジョブデータ取得 */
  getJobs() : IJob[] {
    return new JobData().get();
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
    let jobs = this.getJobs();

    return (
      <section className={this.props.classes.root} id='Jobs' >
        <Typography component='h2' className={this.props.classes.title}>
          How
        </Typography>
        <div className={this.props.classes.jobContents}>
          <Grid container spacing={16} className={this.props.classes.jobGrid} justify='center' alignItems='center' >
            <Grid item xs={12} md={1} className={this.props.classes.jobGridSlider}>
              <IconButton
                color='inherit'
                aria-label='Slider'
              >
                <Left className={this.props.classes.slideIcon} />
              </IconButton>
            </Grid>
            { jobs.map((job, i) => {
              return (
                <Grid item xs={12} md={3} key={`JobPaper-${job.title}`} >
                  <Paper elevation={0} className={this.props.classes.jobPaper} >
                    <section>
                      <Typography component='h3' className={this.props.classes.jobTitle}>
                        <IconButton
                          color='inherit'
                          aria-label='Slider'
                          className={this.props.classes.jobThumbnailButton}
                          onMouseOver={this.jobMouseOver(`showJobDetail-${i}`)}
                          onMouseOut={this.jobMouseOut(`showJobDetail-${i}`)}
                        >
                          <Avatar src={job.thumbnailUrl} className={this.props.classes.jobThumbnail} />
                          <div id={`showJobDetail-${i}`} className={`${this.props.classes.showJobDetail} ${this.props.classes.disable}`} >
                            <div className={this.props.classes.showJobDetailText}>作品を見る</div>
                          </div>
                        </IconButton>
                        {job.title}
                      </Typography>
                      <div>
                        {job.description.map((description, i) => {
                          return <Typography component='p' className={this.props.classes.jobDescription} key={`jobDescription-${job.title}-${i}`}>{description}</Typography>;
                        })}
                      </div>
                    </section>
                  </Paper>
                </Grid>
              )
            }) }
            <Grid item xs={12} md={1} className={this.props.classes.jobGridSlider}>
              <IconButton
                color='inherit'
                aria-label='Slider'
              >
                <Right className={this.props.classes.slideIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Jobs);