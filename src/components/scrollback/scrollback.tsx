import React, { ReactNode, ReactChildren } from 'react';
import styles from './scrollbackStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** クラス名(複数指定可) */
  classNames: string[];
  /** ブレークポイント(複数指定可) */
  breakpoints: Array<number | 'this' | 'bottom'>;
}

/** ステート型定義 */
type State = {
  /** 適用中のクラス名 */
  className: string;
};

/** 画面最下部のスクロール位置を算出 */
function getBottomY(): number {
  // 画面高さ
  let winHeight = window.innerHeight + 5;

  // HTML文書高さ
  let docHeight = window.document.body.clientHeight;

  return (docHeight > 0)? docHeight - winHeight : 0;
}

/** 現在のスクロール位置に該当するブレークポイントを取得 */
function getCurrentClassName(areas: Prop): string {
  let ret = '';
  
  if (areas && areas.classNames && areas.classNames.length > 0)
  {
    ret = areas.classNames[0];

    if (areas.breakpoints && areas.breakpoints.length > 0)
    {
      // スクロール位置の取得
      // ブラウザによってとり方が違うので全部もってきて最大値をとる
      let top = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop);
      
      areas.breakpoints.forEach((breakpoint, i) => {
        let bk: number = 0;
        if (breakpoint == 'bottom')
        {
          bk = getBottomY();
        }
        else if (breakpoint == 'this')
        {
          
        }
        else
        {
          bk = breakpoint;
        }

        if (bk < top)
        {
          if (areas.classNames.length > i + 1) ret = areas.classNames[i + 1];
        }
      });
    }
  }

  return ret;
}

/** コンポーネント定義 */
class ScrollBack extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props: Prop) {
    super(props);

    // ステート初期化
    this.state = {
      className: getCurrentClassName(this.props)
    };

    // スクロールイベント登録
    window.addEventListener('scroll', () => { this.setState({ className: getCurrentClassName(this.props) }); });
  }

  /** 要素のClassNameにstateのclassNameを追加して描画 */
  Child = (props: any) => {
    return <React.Fragment>
      {React.cloneElement(props.elm, { ...props, className: `${props.elm.props.className} ${this.state.className}` })}
    </React.Fragment>;
  };

  /** レンダリング */
  render() {
    return <this.Child elm={this.props.children}/>;
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme: true })(ScrollBack);