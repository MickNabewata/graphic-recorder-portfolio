import React from 'react';
import ReactDOM from 'react-dom';
import LinkGenerator from './linkGenerator';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkGenerator handleNavigate={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
