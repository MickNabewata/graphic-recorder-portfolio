import React from 'react';
import ReactDOM from 'react-dom';
import Jobs from './jobs';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jobs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
