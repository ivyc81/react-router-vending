import React, { Component } from 'react';
import { Link } from 'react-router-dom';;
// import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <p><Link exact to='/soda'> Soda </Link></p>
        <p><Link exact to='/chocolate'> Chocolate </Link></p>
        <p><Link exact to='/gim'> Gim </Link></p>
      </div>
    );
  }
}

export default VendingMachine;
