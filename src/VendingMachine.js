import React, { Component } from 'react';
import { Link } from 'react-router-dom';;
// import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <p><Link to='/soda'> Soda </Link></p>
        <p><Link to='/chocolate'> Chocolate </Link></p>
        <p><Link to='/gim'> Gim </Link></p>
      </div>
    );
  }
}

export default VendingMachine;
