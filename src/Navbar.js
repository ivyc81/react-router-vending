import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { brotliDecompress } from 'zlib';
// import './Navbar.css';

class Navbar extends Component {
  render() {
      const activeStyle = {
        fontWeight: 'bold',
        color: 'blue',
      }

    return (
      <nav className="Navbar">
        <NavLink exact to='/soda' activeStyle={ activeStyle }> Soda </NavLink>
        <NavLink exact to='/chocolate' activeStyle={ activeStyle }> Chocolate </NavLink>
        <NavLink exact to='/gim' activeStyle={ activeStyle }> Gim </NavLink>
      </nav>
    );
  }
}

export default Navbar;