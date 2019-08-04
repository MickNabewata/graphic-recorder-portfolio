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
  /** Drawerの開閉状態 */
  drawerOpen: boolean,
  /** Drawerメニューがクリックされた直後か否か */
  drawerClicked: boolean
};

/** コンポーネント定義 */
class DrawerLayout extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      drawerOpen: false,
      drawerClicked: false
    };

    // スクロールPolyfill
    smoothscroll.polyfill();
  }

  /** Drawerの開閉 */
  handleDrawerToggle = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen, drawerClicked: true }));
  };

  /** Drawerのクリックアウェイ */
  handleClickAway = () => {
    if (this.state.drawerClicked === true) {
      this.setState({ drawerClicked: false });
    }
    else {
      this.setState({ drawerOpen: false });
    }
  };

  /** ナビゲーションクリック */ 
  handleClick = (link : NavLink) => {
    return (event : React.MouseEvent<HTMLElement, MouseEvent>) => {
      // スクロールする
      let to = document.getElementById(link.url);
      if (to) {
        window.scrollTo({ top: to.offsetTop, behavior: 'smooth' });
      }

      // メニューを閉じる
      if(link.closeMenuAfterClick) this.setState({ drawerOpen: false });
    };
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

  /** 次の章までスクロール */
  slideDown = () => {
    // スクロール位置を取得
    // ブラウザによって取り方が違うので全部取って最大値を採用
    let scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop);
    
    // スクロール先を取得
    let to : number = 0;
    let winHeight = 0;
    let hello = document.getElementById('Hello');
    if (hello) winHeight = hello.clientHeight;
    to = (Math.round(scrollTop / winHeight) + 1) * winHeight;

    // スクロール
    window.scrollTo({ top: to, behavior: 'smooth' });
  }

  /** 先頭までスクロール */
  slideUp = () => {
    // スクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** レンダリング */
  render() {
    // Drawerコントロール
    let drawer : JSX.Element = this.createDrawer();

    // ウインドウの高さ
    let winHeight = window.innerHeight - 10;

    return (
      // ルート要素
      <React.Fragment>
        <AppBar position='fixed' className={this.props.classes.appBar}>
          <Toolbar>
            <ScrollBack classNames={[this.props.classes.white, this.props.classes.black]} breakpoints={[winHeight]}>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerToggle}
                className={this.props.classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </ScrollBack>
            {/* タイトル文言 */}
            <ScrollBack classNames={[this.props.classes.white, this.props.classes.translate]} breakpoints={[winHeight]}>
              <Typography component='h1' color='inherit' className={this.props.classes.title} noWrap>
                Yuiko's Portfolio
              </Typography>
            </ScrollBack>
          </Toolbar>
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <nav>
              <Drawer
                variant='persistent'
                anchor='left'
                open={this.state.drawerOpen}
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
        <ScrollBack classNames={[this.props.classes.white, this.props.classes.black, this.props.classes.disable]} breakpoints={[0, 'bottom']}>
          <IconButton
            color='inherit'
            aria-label='Go to next page'
            className={this.props.classes.navigateButton}
            onClick={this.slideDown}
          >
            <NextIcon className={this.props.classes.navigateIcon} />
          </IconButton>
        </ScrollBack>
        <ScrollBack classNames={[this.props.classes.disable, this.props.classes.enable]} breakpoints={['bottom']}>
          <IconButton
            color='inherit'
            aria-label='Go to previous page'
            className={this.props.classes.navigateButton}
            onClick={this.slideUp}
          >
            <BeforeIcon className={this.props.classes.navigateIcon} />
          </IconButton>
        </ScrollBack>
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(DrawerLayout);