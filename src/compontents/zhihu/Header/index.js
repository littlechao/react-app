import React from 'react';
import './index.less';
class zhihuIndex extends React.Component {
  componentDidMount(){
    window.onscroll = (ev)=> {
      console.log(document.documentElement.scrollTop)
    }
  }
  render(){
    return (
      <React.Fragment>
        <div className="wrapper" ref="header">  
          <div className="inputWrapper">
            <img src={require('../../../assets/images/search.png')} alt=""/>
            <input type="text"/>
          </div>
          <img className="lightTing" src={require('../../../assets/images/lighting.png')} alt=""/>
        </div>
      </React.Fragment>
    )
  }
}

export default zhihuIndex;