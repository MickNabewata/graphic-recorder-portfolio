import React from 'react';
import styles from './drawerLayoutStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import smoothscroll from 'smoothscroll-polyfill';
import NextIcon from '@material-ui/icons/ExpandMore';
import BeforeIcon from '@material-ui/icons/ExpandLess';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ScrollBack from '../scrollback/scrollback';

/** ナビゲーションリンク */
export type NavLink = {
  /** 表示文字列 */
  text : string,
  /** URL */
  url : string,
  /** 表示アイコン */
  icon? : JSX.Element | undefined,
  /** クリック後にナビゲーションを閉じるか否か */
  closeMenuAfterClick? : boolean | false
};

/** ナビゲーションリンク配列 */
export type NavLinks = NavLink[];

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ナビゲーションリンク(1要素ずつDividerで区切られる) */
  links : NavLinks[]
}

/** ステート型定義 */
type State = {
  /** Drawerの開閉状態(モバイル表示で利用) */
  mobileOpen: boolean,
  /** ナビゲーション外クリックで強制的に閉じられたか否か */
  clickAwayed: boolean
};

/** コンポーネント定義 */
class DrawerLayout extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // スクロール位置を取得
    // ブラウザによって取り方が違うので全部取って最大値を採用
    let scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop);

    // ステート初期化
    this.state = {
      mobileOpen: false,
      clickAwayed: false
    };

    // スクロールPolyfill
    smoothscroll.polyfill();

    // スクロールイベント
    window.addEventListener('scroll', (e) => {

    });
  }

  /** Drawerの開閉 */
  handleDrawerToggle = () => {
    if (this.state.clickAwayed == true) {
      this.setState({ mobileOpen: false, clickAwayed: false });
    }
    else {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    }
  };

  /** ナビゲーションクリック */ 
  handleClick = (link : NavLink) => {
    return (event : React.MouseEvent<HTMLElement, MouseEvent>) => {
      // スクロールする
      let to = document.getElementById(link.url);
      if(to) {
        window.scrollTo({ top : to.offsetTop - 56, behavior : 'smooth' });
      }

      // メニューを閉じる
      if(link.closeMenuAfterClick) this.setState({ mobileOpen: false });
    };
  };

  /** Drawerのクローズ */
  handleDrawerClose = () => {
    if (this.state.mobileOpen == true) {
      this.setState({ mobileOpen: false, clickAwayed: true });
      setTimeout(() => {
        this.setState({ clickAwayed: false });
      }, 10);
    }
  };

  /** Drawer内のメニューを生成 */
  linksCount : number = 0;
  createList(links : NavLink[]) : JSX.Element
  {
    this.linksCount++;
    return (
      <React.Fragment key={`navFrag-${this.linksCount}`}>
        <List>
          {links.map((link : NavLink) => {
            return (
              <ListItem 
                button 
                key={`navItem-${link.text}`} 
                onClick={ this.handleClick(link) } 
                className={this.props.classes.linkItem} >
                {(link.icon !== undefined)? <ListItemIcon>{link.icon}</ListItemIcon> : <React.Fragment />}
                <ListItemText primary={link.text} disableTypography={true} className={this.props.classes.linkText} />
              </ListItem>
            )
          })}
        </List>
      </React.Fragment>  
    );
  }

  /** Drawerコントロールを生成 */
  createDrawer() : JSX.Element
  {
    return (
      <div>
        <div className={this.props.classes.toolbar} />
        {this.props.links.map((links : NavLink[]) => {
          return this.createList(links);
        })}
      </div>
    );
  }

  /** レンダリング */
  render() {
    
    // Drawerコントロール
    let drawer : JSX.Element = this.createDrawer();

    return (
      // ルート要素
      <React.Fragment>
        <AppBar position='fixed' className={this.props.classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={this.props.classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {/* タイトル文言 */}
            <Typography component='h1' color='inherit' className={this.props.classes.title} noWrap>
              Yuiko's Portfolio
            </Typography>
          </Toolbar>
          <ClickAwayListener onClickAway={this.handleDrawerClose}>
            <nav>
              <Drawer
                variant='persistent'
                anchor='left'
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: this.props.classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </nav>
          </ClickAwayListener>
        </AppBar>
        {/* メイン領域 */}
        <main className={this.props.classes.content}>
          {this.props.children}
        </main>
        <ScrollBack classNames={[this.props.classes.white, this.props.classes.black]} breakpoints={[210]}>
          <IconButton
            color='inherit'
            aria-label='Go to next page'
            className={this.props.classes.navigateButton}
          >
            <NextIcon className={this.props.classes.navigateIcon} />
          </IconButton>
        </ScrollBack>
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(DrawerLayout);