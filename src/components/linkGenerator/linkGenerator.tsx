import React from 'react';
import { Link } from 'react-router-dom';
import styles from './linkGeneratorStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import pages from '../../datas/pageData';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import QueryUtil from '../../utils/queryUtil';
import { getLinks } from '../../datas/linkData';
import LinkCard from '../linkCard/linkCard';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** クリックイベント */
  handleNavigate : ((path : string) => void)
}

/** ステート型定義 */
type State = {
  domain? : string,
  preFix? : string,
  site? : string,
  fullUrl? : string
};

/** コンポーネント定義 */
class LinkGenerator extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    let params = new QueryUtil().get().params;
    let domain = (params['domain'])? decodeURIComponent(params['domain']) : 'contoso';
    let preFix = (params['preFix'])? decodeURIComponent(params['preFix']) : '/sites/';
    let site = (params['site'])? decodeURIComponent(params['site']) : 'sampleSite';

    this.state = {
      domain : domain,
      preFix : preFix,
      site : site,
      fullUrl : (domain && preFix && site)? `https://${domain}.sharepoint.com${preFix}${site}` : ''
    };
  }

  /** 入力フィールドの変更ハンドラ */
  handleInputChange = (key : string) => (e : React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [key] : e.target.value });
  };

  /** プレフィクス選択肢 */
  preFixOptions = [
    '/sites/','/teams/'
  ];

  /** 生成ボタンリンク先 */
  generateButtonUrl() {
    let ret = pages.linkGenerator.path;
    let temp : string[] = [];

    if(this.state.domain) temp.push(`domain=${encodeURIComponent(this.state.domain)}`);
    if(this.state.preFix) temp.push(`preFix=${encodeURIComponent(this.state.preFix)}`);
    if(this.state.site) temp.push(`site=${encodeURIComponent(this.state.site)}`);

    if(temp.length > 0) ret += `?${temp.join('&')}`;

    return ret;
  }

  /** 生成ボタン要素を作成 */
  renderGenerateButton() : JSX.Element {
    let disabled : boolean = !((this.state.domain) && (this.state.preFix) && (this.state.site));
    let button : JSX.Element = (
      <Button
        variant='outlined' 
        color='secondary' 
        className={this.props.classes.generateButton}
        disabled={disabled}>
        生成
      </Button>
    );

    return (
      (disabled)?
        button : 
        <Link 
          to={this.generateButtonUrl()} 
          className={this.props.classes.generateLink} 
          onClick={() => {this.props.handleNavigate(pages.linkGenerator.path);}}
          >
          {button}
        </Link>
    );
  }

  /** 入力フィールド要素を作成 */
  renderInputField() : JSX.Element {
    return (
      <Card className={this.props.classes.inputCard}>
        <CardContent>
          <Typography variant='h1' className={this.props.classes.inputFieldTitle} >サイトURL</Typography>
          <div className={this.props.classes.inputField}>
            <Input
              id='input-domain'
              value={this.state.domain}
              onChange={this.handleInputChange('domain')}
              className={this.props.classes.inputFieldDomain}
              startAdornment={<InputAdornment position='start' disableTypography={true}>https://</InputAdornment>}
              endAdornment={<InputAdornment position='end' disableTypography={true}>.sharepoint.com</InputAdornment>}
            />
            <TextField
              id='select-preFix'
              select
              value={this.state.preFix}
              onChange={this.handleInputChange('preFix')}
              className={this.props.classes.inputFieldPreFix}
              SelectProps={
                {
                  MenuProps : {
                    className : this.props.classes.preFixMenu
                  }
                }
              }>
              {this.preFixOptions.map((option) => {
                return (
                  <MenuItem key={`preFixOption-${option}`} value={option}>
                    {option}
                  </MenuItem>
                )
              })}
            </TextField>
            <Input
              id='input-site'
              value={this.state.site}
              onChange={this.handleInputChange('site')}
              className={this.props.classes.inputFieldSite}
            />
            {this.renderGenerateButton()}
          </div>
        </CardContent>
      </Card>
    );
  }

  /** 生成結果要素を作成 */
  renderGenerateResult() : JSX.Element {
    let result : JSX.Element = <React.Fragment />;
    if(this.state.fullUrl)
    {
      let domain = this.state.fullUrl.match(/https:\/\/.*\.sharepoint\.com/);
      let domainStr = (domain)? domain.toString() : '';
      let links = getLinks(domainStr, this.state.fullUrl.replace(domainStr, ''));
      result = <LinkCard data={links} />
    }

    return (
      <div>
        {result}
      </div>
    );
  }

  /** レンダリング */
  render() {
    return (
        <React.Fragment>
          <Typography component='h1' gutterBottom className={this.props.classes.wellcome}>
            このページでは、SharePontサイトのURLを指定して様々なシステムページへのリンクを生成することができます。<br />
            お勉強、興味本位、お気に入り登録などお好きな用途にご利用ください。<br />
            （サイトの存在確認は行っておらず、テナントへのアクセスは一切発生しません。）
          </Typography>
          {this.renderInputField()}
          {this.renderGenerateResult()}
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(LinkGenerator);