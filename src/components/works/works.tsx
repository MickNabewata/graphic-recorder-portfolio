import React from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import WorkData, { IWork } from '../../datas/workData';
import WorkCard from '../workCard/workCard';
import Grid from '@material-ui/core/Grid';

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
          <Grid container spacing={40} className={this.props.classes.workGrid} justify='center' alignItems='center' >
            { works.map((work) => {
              return <WorkCard work={work} key={`workCard-${work.title}`} />
            }) }
          </Grid>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);