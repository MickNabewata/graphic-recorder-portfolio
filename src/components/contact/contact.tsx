import React from 'react';
import styles from './contactStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  /** 依頼内容 */
  order : string;

  /** 連絡先 */
  contact : string;
};

/** コンポーネント定義 */
class Contact extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    let targetMonth = new Date().getMonth() + 2;
    let date = new Date(new Date().getFullYear(), targetMonth, new Date().getDay());
    this.state = {
      order : (`例）\r\n内容：春をイメージした新製品の企画会議についてグラレコをお願いしたい\r\n希望時期：${date.getFullYear()}年${date.getMonth()}月\r\n予算：～ 20万`),
      contact : '例）taro.sample@contoso.co.jp'
    };
  }

  orderChanged = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ order : event.target.value });
  };

  contactChanged = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ contact : event.target.value });
  }

  /** レンダリング */
  render() {
    return (
      <section id='Contact' className={this.props.classes.root} >
        <div className={this.props.classes.toolbar} />
        <Typography component='h2' gutterBottom className={this.props.classes.title}>
          Contact
        </Typography>
        <div className={this.props.classes.content}>
          <div className={this.props.classes.container}>
            <TextField
              multiline
              required
              rows='10'
              value={this.state.order}
              label='ご依頼内容'
              onChange={this.orderChanged}
              className={this.props.classes.textField}
              error={!this.state.order}
              margin='normal'
              variant='outlined'
            />
            <TextField
              required
              value={this.state.contact}
              label='ご連絡先'
              onChange={this.contactChanged}
              className={this.props.classes.textField}
              error={!this.state.contact}
              margin='normal'
              variant='outlined'
            />
            <div className={this.props.classes.buttonArea} >
              <Button
                variant='contained'
                color='primary'
              >
                送信
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Contact);