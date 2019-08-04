import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import DrawerLayout, { NavLinks } from '../drawerLayout/drawerLayout';
import Home from '../home/home';

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
      currentPath : window.location.pathname
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
        text : 'Home',
        url : 'Hello',
        icon : undefined,
        closeMenuAfterClick : true
      },
      {
        text : 'How',
        url : 'Jobs',
        icon :undefined,
        closeMenuAfterClick : true
      },
      {
        text : 'Works',
        url : 'Works',
        icon : undefined,
        closeMenuAfterClick : true
      },
      {
        text : 'Contact',
        url : 'Contact',
        icon : undefined,
        closeMenuAfterClick : true
      },
      {
        text : 'AboutMe',
        url : 'AboutMe',
        icon : undefined,
        closeMenuAfterClick : true
      }
    ]
  ];

  /** レンダリング */
  render() {
    return (
      <BrowserRouter>
        <DrawerLayout links={ this.staticLinks } >
          <Route exact path={'/'} component={() => { return <Home /> }} />
        </DrawerLayout>
      </BrowserRouter>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));