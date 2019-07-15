import React from 'react';
import ReactDOM from 'react-dom';
import WorkDialog from './workDialog';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
