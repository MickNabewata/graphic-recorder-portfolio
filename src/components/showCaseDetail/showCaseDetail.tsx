import React from 'react';
import { Link } from 'react-router-dom';
import styles from './showCaseDetailStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import QueryUtil from '../../utils/queryUtil';
import modules, { module } from '../../datas/moduleData';
import { tag } from '../../datas/tagData';
import pages from '../../datas/pageData';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardMedia, CardHeader, CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ArrowBackIos from '@material-ui/icons/ArrowBackIosRounded';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** クリックイベント */
  handleNavigate : ((path : string) => void)
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class showCaseDetail extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** 部品データ取得 */
  getData() : module | undefined {
    let moduleNames : string[] = new QueryUtil().get(',').params['data'];
    let moduleName = (moduleNames && moduleNames.length > 0)? moduleNames[0] : '';
    return modules.find(module => module.name.toUpperCase() == decodeURIComponent(moduleName.toUpperCase()));
  }

  /** タグクリック時 遷移先URL */
  linkString(tag : tag) : string {
    let query = new QueryUtil().add({ 'tags' : [tag.name.toUpperCase()] }).toString(['tags']);
    return `${pages.showCase.path}${query}`;
  };

  /** 戻るボタンURL */
  backUrl() : string {
    let sourceParam = new QueryUtil().get(',').params['source'];
    let source = (sourceParam)? decodeURIComponent(sourceParam) : pages.showCase.path;
    return source;
  }

  /** 絞り込みリンク描画 */
  renderFilterLink(data : tag) : JSX.Element {
    return (
      <Link to={this.linkString(data)} key={`link-${data.name}`} className={this.props.classes.filterLink} >
        <Button size='small' color='primary' title={data.description} key={`tag-${data.name}`}>
          {data.name}
        </Button>
      </Link>
    );
  }

  /** データが無い場合の描画 */
  renderNoData() : JSX.Element {
    return (
      <Typography component='h1' gutterBottom className={this.props.classes.nodata}>
        データがありません。
      </Typography>
    );
  }

  /** データが有る場合の描画 */
  renderData(data : module) : JSX.Element {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Card className={this.props.classes.card}>
          <div className={this.props.classes.mediaArea}>
            <CardMedia 
              component='img'
              image={data.image}
              className={this.props.classes.media} />
          </div>
          <CardHeader
            title={data.name}
            action={
              <Link to={this.backUrl()}>
                <Fab color='primary'>
                  <ArrowBackIos/>
                </Fab>
              </Link>
            } />
          <CardContent>
            {data.description}
          </CardContent>
          <CardActions>
            <span className={this.props.classes.actionButtons} >
              {data.tags.map((tag) => {
                return this.renderFilterLink(tag);
              })}
            </span>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }

  /** レンダリング */
  render() {
    // 部品データ取得
    let data = this.getData();

    // 描画
    return (
      <React.Fragment>
        {(data)? this.renderData(data) : this.renderNoData()}
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(showCaseDetail);