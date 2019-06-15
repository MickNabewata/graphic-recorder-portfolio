import React from 'react';
import styles from './linkCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Label from '@material-ui/icons/Label';
import { link } from '../../datas/linkData';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** 描画するデータ */
  data : link
}

/** ステート型定義 */
type State = {
  contentOpened : boolean
};

/** コンポーネント定義 */
class LinkCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    this.state = {
      contentOpened : (props.data.opened)? props.data.opened : false
    };
  }

  /** 画面名を描画 */
  renderName() {
    return (
      <Typography>
        <Label className={this.props.classes.nameLabel} />
        <span className={this.props.classes.nameLabelText} >{this.props.data.name}</span>
      </Typography>
    );
  }

  /** URLを描画 */
  renderPath() : JSX.Element {
    let ret : JSX.Element = <React.Fragment />;
    let path = this.props.data.path;
    let disp = (this.props.data.pathDisp)? this.props.data.pathDisp : path;

    if(path && path.length > 0)
    {
      ret = (
        <React.Fragment>
          <div className={this.props.classes.contentSubAreaTitle}>
            URL
          </div>
          <div className={this.props.classes.contentSubArea}>
            <a href={path} target='_blank' className={this.props.classes.cardLink}>{disp}</a>
          </div>
        </React.Fragment>
      );
    }

    return ret;
  }

  /** サブリンクを描画 */
  renderChild() : JSX.Element {
    let ret : JSX.Element = <React.Fragment />;

    if(this.props.data.subLinks) {
      let subLinks = this.props.data.subLinks;
      ret = (
        <React.Fragment>
          {subLinks.map((subLink) => {
            if(subLink.subLinks)
            {
              return <LinkCard data={subLink} classes={this.props.classes} key={`subCard-${this.props.data.name}-${subLink.name}`}/>;
            }
            else
            {
              return (
                <a href={subLink.path} className={this.props.classes.subLink} target='_blank' key={`subLink-${this.props.data.name}-${subLink.name}`}>
                  <Chip label={subLink.name} onClick={() => {}} title={subLink.description} variant='outlined' className={this.props.classes.subLinkChip} />
                </a>
              );
            }
          })}
        </React.Fragment>
      );
    }

    return ret;
  }

  /** レンダリング */
  render() {
    return (
        <React.Fragment>
          <ExpansionPanel key={`linkCard-${this.props.data.name}`}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} title={this.props.data.description} className={this.props.classes.head} >
              {this.renderName()}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={this.props.classes.content}>
              {this.renderPath()}
              {this.renderChild()}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(LinkCard);