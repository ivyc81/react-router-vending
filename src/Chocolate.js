import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Chocolate.css';

class Chocolate extends Component {
  render() {
    return (
      <div className="Chocolate">
        I am Chocolate!!! I am everyone's favorite.
        <Link to='/'>Home </Link>
      </div>
    );
  }
}

export default Chocolate;