import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './aboutMe';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutMe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
