import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chocolate from './Chocolate';
import Gim from './Gim';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <VendingMachine />} />
            <Route exact path='/soda' render={() => <Soda />} />
            <Route exact path='/chocolate' render={() => <Chocolate />} />
            <Route exact path='/gim' render={() => <Gim />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
