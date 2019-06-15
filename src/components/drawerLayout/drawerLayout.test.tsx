import React from 'react';
import ReactDOM from 'react-dom';
import DrawerLayout, { NavLinks } from './drawerLayout';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  const links : NavLinks[] = [];
  ReactDOM.render(<DrawerLayout links={links} currentPath={''} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
