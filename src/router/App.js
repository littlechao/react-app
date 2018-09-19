import React, { Component } from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import Detail from '../compontents/detail' 
import Header from '../compontents/header' 
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Detail />
      </div>
    );
  }
}

export default App;
