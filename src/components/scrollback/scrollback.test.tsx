import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBack from './scrollback';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScrollBack />, div);
  ReactDOM.unmountComponentAtNode(div);
});
