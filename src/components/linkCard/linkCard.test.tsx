import React from 'react';
import ReactDOM from 'react-dom';
import LinkCard from './linkCard';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  const level : 1 | 2 | 3 | 4 | 5 = 1;
  const data = {
    name : '',
    description : '',
    level : level,
    path : '',
    pathDisp : ''
  };
  ReactDOM.render(<LinkCard data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
