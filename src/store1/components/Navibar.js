import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li><NavLink to="/stores">Stores</NavLink></li>
      <li><NavLink to="/store1">Store 1</NavLink></li>

    </ul>
  );
};

export default Nav;
