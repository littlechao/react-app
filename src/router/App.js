import React, { Component } from 'react';
// import { Route, IndexRoute, hashHistory,Router } from 'react-router';
import Detail from '../compontents/detail/detail' 
import Header from '../compontents/header/header' 
import Bottom from '../compontents/bottom/bottom'
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <Route
              path="/"
              component={Detail}
          >
            <Route
              path="/Header"
              component={Header}
            >
            </Route> 
          </Route>
        </Router> */}
        <Header title="header"/>
        <Detail title="Detail"/>
        <Bottom />
      </div>
    );
  }
}

export default App;
