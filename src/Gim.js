import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gimPng from './gim.png';
import './Gim.css';

class Gim extends Component {
  render() {
    return (
      <div className="Gim">
        <p>I am delicious! I am Gim!!!</p>
        <img src={ gimPng } alt="gim"/>
        <p><Link to='/'>Home </Link></p>
      </div>
    );
  }
}

export default Gim;