import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chocoPng from './chocolate.png';
import './Chocolate.css';

class Chocolate extends Component {
  render() {
    return (
      <div className="Chocolate">
        <p>I am Chocolate!!! I am everyone's favorite.</p>
        <img src={ chocoPng } alt="dark chocolate" />
        <Link to='/'>Home </Link>
      </div>
    );
  }
}

export default Chocolate;