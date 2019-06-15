import React from 'react';
import { Link } from 'react-router-dom';
import styles from './showCaseStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import pages from '../../datas/pageData';
import modules, { module } from '../../datas/moduleData';
import QueryUtil from '../../utils/queryUtil';
import Typography from '@material-ui/core/Typography';
import ShowCard from '../showCard/showCard';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** クリックイベント */
  handleNavigate : ((path : string) => void)
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class showCase extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** データをフィルタリング */
  filterData() : module[] {
    let ret : module[] = modules;
    let tags : string[] = new QueryUtil().get(',').params['tags'];
    if(tags && tags.length > 0) {
      tags.map((tag) => {
        ret = ret.filter(module => module.tags.findIndex(tag2 => tag2.name.toUpperCase() == decodeURIComponent(tag).toUpperCase()) > -1);
      });
    }

    return ret;
  }

  /** フィルタ一覧のレンダリング */
  renderFilters() : JSX.Element {
    let filters : string[] = new QueryUtil().get(',').params['tags'];
    let filterElements : JSX.Element[] = [];
    if(filters)
    {
      filters.map((filter) => {
        let query = new QueryUtil().get(',').remove('tags', filter).toString(['tags']);
        filterElements.push(
          <Link to={`${pages.showCase.path}${query}`} className={this.props.classes.deleteLink} key={`deleteLink-${filter}`} >
            <Button size='small' color='primary' variant='contained'>
              {decodeURIComponent(filter)}
              <DeleteIcon />
            </Button>
          </Link>
        );
      });
    }

    return (
      <React.Fragment>
        {filterElements}
      </React.Fragment>
    );
  }

  /** レンダリング */
  render() {
    return (
      <React.Fragment>
        <Typography component='h1' gutterBottom className={this.props.classes.wellcome}>
          このページでは、SharePointサイトの構成に使える様々な部品を紹介しています。<br />
          Webパーツ、サイトテンプレートなどを一覧することができます。
        </Typography>
        <div className={this.props.classes.deleteLinkArea} >
          {this.renderFilters()}
        </div>
        <div className={this.props.classes.cardArea}>
          {this.filterData().map((module) => {
            return (<ShowCard handleNavigate={this.props.handleNavigate} data={module} key={`showCard-${module.name}`} />);
          })}
        </div>
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(showCase);