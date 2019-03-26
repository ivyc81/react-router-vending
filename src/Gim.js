import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Gim.css';

class Gim extends Component {
  render() {
    return (
      <div className="Gim">
        I am delicious! I am Gim!!!
        <Link to='/'>Home </Link>
      </div>
    );
  }
}

export default Gim;