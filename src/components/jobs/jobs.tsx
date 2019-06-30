import React from 'react';
import styles from './jobsStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import JobData, { IJob } from '../../datas/jobData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';

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

  /** レンダリング */
  render() {
    let jobs = this.getJobs();

    return (
      <section className={this.props.classes.root} id='Jobs' >
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
          Jobs
        </Typography>
        <div>
          <Grid container spacing={16} className={this.props.classes.jobGrid} justify='center' alignItems='center' >
            <Grid item xs={12} md={1} className={this.props.classes.jobGridSlider}>
              <Fab color='primary' >
                <Left fontSize='large' />
              </Fab>
            </Grid>
            { jobs.map((job) => {
              return (
                <Grid item xs={12} md={3} key={`JobPaper-${job.title}`} >
                  <Paper className={this.props.classes.jobPaper} >
                    <section>
                      <Typography component='h3' gutterBottom className={this.props.classes.jobTitle}>
                        <Avatar src={job.thumbnailUrl} className={this.props.classes.jobThumbnail} />
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
              <Fab color='primary' >
                <Right fontSize='large' />
              </Fab>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Jobs);