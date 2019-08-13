import React from 'react';
import styles from './jobsStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import JobData, { IJob } from '../../datas/jobData';
import JobCard from '../jobCard/jobCard';
import Grid from '@material-ui/core/Grid';

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
    let jobs: IJob[] = this.getJobs();

    return (
      <section className={this.props.classes.root} id='Jobs' >
        <div className={this.props.classes.toolbar} />
        <Typography component='h2' className={this.props.classes.title}>
          How
        </Typography>
        <div className={this.props.classes.jobContents}>
          <Grid container spacing={2} className={this.props.classes.jobGrid} justify='center' alignItems='center' >
            {jobs.map((job: IJob) => {
              return <JobCard job={job} key={`jobCard-${job.title}`} />;
            })}
          </Grid>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Jobs);