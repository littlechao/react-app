import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route,HashRouter,Redirect} from "react-router-dom";
import Detail from '../compontents/detail/detail' 
import Bottom from '../compontents/bottom/bottom'
import logo from '../logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Message from '../compontents/message/message';
import Home from '../compontents/home/home';
import store from '../store.js';
class Inbox extends React.Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class App extends Component {
  static onRedirct() {
    return <Redirect to="/home"/>;
  }
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props.children)
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact render={App.onRedirct}/>
            <Route exact path="/home" component={Home} />
            <Route path="/message" component={Message} />
            <Route path="/inbox" component={Inbox} />
            <Bottom />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
