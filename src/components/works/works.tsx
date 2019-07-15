import React from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import WorkData, { IWork } from '../../datas/workData';
import WorkCard from '../workCard/workCard';
import Grid from '@material-ui/core/Grid';
import QueryUtil from '../../utils/queryUtil';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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

  /** Worksデータ取得 */
  getWorks() : IWork[] {

    // URLパラメータから絞り込み条件を取得
    let filters : string[] = new QueryUtil().get(',').params.tag;

    // Worksデータ取得
    let works = new WorkData().get();

    // 絞り込み
    let ret = works;
    if(filters) {
      ret = works.filter((v) => {
        let isMutch : boolean = true;
        for (let i = 0; i < filters.length; i++)
        {
          // タグを含まないものは除外
          if(v.tags.includes(filters[i]) == false)
          {
            isMutch = false;
            break;
          }
        }
        return isMutch;
      });
    }

    // 返却
    return ret;
  }

  /** フィルタボタンのレンダリング */
  renderTitleWithFilters(title : string) : JSX.Element {

    let filters : string[] = new QueryUtil().get(',').params.tag;

    return (
      <React.Fragment>
        {
          (filters)?
            <React.Fragment>
              {title}
              <span className={this.props.classes.filterArea}>
                {` - ${filters.join(',')} - `}
                <Link
                  to={`${location.pathname}`}
                  className={this.props.classes.filter}>
                  <Button
                    variant="contained"
                    size='small'
                    color='default'>
                      <DeleteIcon />
                  </Button>
                </Link>
              </span>
            </React.Fragment> :
            title
        }
      </React.Fragment>
    );
  }

  /** コンポーネントアップデート前のイベント */
  componentWillUpdate() {
    let tag = new QueryUtil().get(',').params.tag;
    if(tag) {
      let to = document.getElementById('Works');
      if (to) {
        window.scrollTo({ top: to.offsetTop, behavior: 'smooth' });
      }
    }
  }

  /** レンダリング */
  render() {
    let works = this.getWorks();

    return (
      <section className={this.props.classes.root} id='Works' >
        <div className={this.props.classes.head}>
          <Typography component='h2' gutterBottom className={this.props.classes.title}>
            {this.renderTitleWithFilters('Works')}
          </Typography>
        </div>
        <div>
          {(works.length > 0)?
            <Grid container spacing={40} className={this.props.classes.workGrid} justify='center' alignItems='center' >
              { works.map((work) => {
                return <WorkCard work={work} key={`workCard-${work.title}`} />
              }) }
            </Grid> :
            <Typography component='p'>
              結果がありません。別の絞り込みをお試しください。
            </Typography>
          }
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);