import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import Bottom from '../compontents/bottom/bottom'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Message from '../compontents/message/message';
import Home from '../compontents/home/home';
import zhihuIndex from '../compontents/zhihu';
import store from '../store.js';
class Inbox extends React.Component {
  render() {
    return (
      <div>
        {"暂未开发"}
      </div>
    )
  }
}
function redirect() {
  return <Redirect to="/home"/>;
}
class App extends Component {
  static onRedirct() {
    
  }
  componentDidMount(){
    console.log(this)
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact render={redirect}/>
            <Route exact path="/home" component={Home} />
            <Route path="/message" component={Message} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/zhihuIndex" component={zhihuIndex} />
            <Bottom />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
