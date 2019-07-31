import React from 'react';
import styles from './homeStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Hello from '../hello/hello';
import Jobs from '../jobs/jobs';
import Works from '../works/works';
import Contact from '../contact/contact';
import AboutMe from '../aboutMe/aboutMe';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Home extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** レンダリング */
  render() {
    return (
        <React.Fragment>
          <Hello />
          <Jobs />
          <Works />
          <Contact />
          <AboutMe />
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Home);