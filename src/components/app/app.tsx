import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import pages from '../../datas/pageData';
import Home from '@material-ui/icons/Home';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import RoomService from '@material-ui/icons/RoomService';
import Restaurant from '@material-ui/icons/Restaurant';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import withRoot from '../../withRoot';
import DrawerLayout, { NavLinks } from '../drawerLayout/drawerLayout';
import Hello from '../hello/hello';
import LinkGenerator from '../linkGenerator/linkGenerator';
import ShowCase from '../showCase/showCase';
import ShowCaseDetail from '../showCaseDetail/showCaseDetail';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
interface State {
  /** 表示中ページのパス */
  currentPath : string
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      currentPath : location.pathname
    };
  }

  /** ナビゲーション発生時 */
  handleNavigate = (path : string) => {
    this.setState({ currentPath : path });
  };

  /** 固定のナビゲーション */
  staticLinks : NavLinks[] = [
    [
      {
        text : pages.home.name,
        url : pages.home.path,
        icon : <Home />,
        click : (event) => {
          this.handleNavigate(pages.home.path);
        },
        closeMenuAfterClick : true
      },
      {
        text : pages.showCase.name,
        url : pages.showCase.path,
        icon : <RoomService />,
        click : (event) => {
          this.handleNavigate(pages.showCase.path);
        },
        closeMenuAfterClick : true
      },
      {
        text : pages.linkGenerator.name,
        url : pages.linkGenerator.path,
        icon : <DirectionsRun />,
        click : (event) => {
          this.handleNavigate(pages.linkGenerator.path);
        },
        closeMenuAfterClick : true
      },
      {
        text : 'ブログ',
        url : 'https://www.micknabewata.com',
        icon : <Restaurant />,
        closeMenuAfterClick : true
      },
      {
        text : 'ポートフォリオ',
        url : 'https://portfolio.micknabewata.com/',
        icon : <FitnessCenter />,
        closeMenuAfterClick : true
      }
    ]
  ];

  /** レンダリング */
  render() {
    return (
      <BrowserRouter>
        <DrawerLayout links={ this.staticLinks } currentPath={ this.state.currentPath } >
          <Route exact path={pages.home.path} component={() => { return <Hello /> }} />
          <Route exact path={pages.showCase.path} component={() => { return <ShowCase handleNavigate={this.handleNavigate} /> }} />
          <Route exact path={pages.showCaseDetail.path} component={() => { return <ShowCaseDetail handleNavigate={this.handleNavigate} /> }} />
          <Route exact path={pages.linkGenerator.path} component={() => { return <LinkGenerator handleNavigate={this.handleNavigate} /> }} />
        </DrawerLayout>
      </BrowserRouter>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));