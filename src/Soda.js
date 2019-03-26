import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Soda.css';

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        Bubblezzz
        
        <Link to='/'>Home </Link>
      </div>
    );
  }
}

export default Soda;