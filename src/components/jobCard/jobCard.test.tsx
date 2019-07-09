import React from 'react';
import ReactDOM from 'react-dom';
import JobCard from './jobCard';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
