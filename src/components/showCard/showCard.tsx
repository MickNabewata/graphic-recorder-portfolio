import React from 'react';
import { Link } from 'react-router-dom';
import styles from './showCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import QueryUtil from '../../utils/queryUtil';
import { module } from '../../datas/moduleData';
import { tag } from '../../datas/tagData';
import pages from '../../datas/pageData';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardHeader, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** クリックイベント */
  handleNavigate : ((path : string) => void),
  /** データ */
  data : module
}

/** ステート型定義 */
type State = {
  /** ダイアログ表示有無 */
  dialogOpen : boolean
};

/** コンポーネント定義 */
class showCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      dialogOpen : false
    };
  }

  /** ダイアログオープン */
  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  /** ダイアログクローズ */
  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  /** タグクリック時 遷移先URL */
  linkString(tag : tag) : string {
    let query = new QueryUtil().get(',').add({ 'tags' : [tag.name.toUpperCase()] }).toString(['tags']);
    return `${pages.showCase.path}${query}`;
  };

  /** 画像クリック時 遷移先URL */
  detailLinkString() : string {
    let query = `?data=${this.props.data.name}&source=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    return `${pages.showCaseDetail.path}${query}`;
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

  /** レンダリング */
  render() {
    return (
      <React.Fragment>
        <Card className={this.props.classes.card}>
          <CardActionArea>
            <Link to={this.detailLinkString()}>
              <div className={this.props.classes.mediaArea}>
                <div className={this.props.classes.media}>
                  <CardMedia 
                    component='img'
                    image={this.props.data.image} />
                </div>
              </div>
            </Link>
          </CardActionArea>
          <CardHeader title={this.props.data.name} />
          <CardActions>
            <span className={this.props.classes.actionButtons} >
              {this.props.data.tags.slice(0,3).map((tag) => {
                return this.renderFilterLink(tag);
              })}
            </span>
          </CardActions>
        </Card>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
        >
          <span className={this.props.classes.filterDialog}>
            {this.props.data.tags.map((tag) => {
              return this.renderFilterLink(tag);
            })}
          </span>
        </Dialog>
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(showCard);