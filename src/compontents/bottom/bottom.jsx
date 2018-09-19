import React from 'react';
import './bottom.less'
import { Icon} from 'antd-mobile';

class Bottom extends React.Component{
  constructor() {
    super()
    this.state = {
      index : 0
    }
    this.changeActive = this.changeActive.bind(this)
  }
  changeActive(val) {
    console.log(val)
    this.setState({ index: val });
  }
  render() {
    return (
      <div className="bottom-wrapper">
        <div className="bottom">
          <div className={['item',this.state.index===0&&'active'].join(' ')} onClick={this.changeActive.bind(this,0)}>
            <img src={this.state.index==0?require('../../static/images/iconed.png'):require('../../static/images/icon.png')} alt=""/>
            <span>主页</span>
          </div>
          <div className={['item',this.state.index===1&&'active'].join(' ')} onClick={this.changeActive.bind(this,1)}>
            <img src={this.state.index==1?require('../../static/images/classed.png'):require('../../static/images/class.png')} alt=""/>
            <span>主页</span></div>
          <div className={['item',this.state.index===2&&'active'].join(' ')} onClick={this.changeActive.bind(this,2)}>
            <img src={this.state.index==2?require('../../static/images/messaged.png'):require('../../static/images/message.png')} alt=""/>
            <span>我的</span>
          </div>
          <div className={['item',this.state.index===3&&'active'].join(' ')} onClick={this.changeActive.bind(this,3)}>
            <img src={this.state.index==3?require('../../static/images/studyed.png'):require('../../static/images/study.png')} alt=""/>
            <span>我的</span>
          </div>
          <div className={['item',this.state.index===4&&'active'].join(' ')} onClick={this.changeActive.bind(this,4)}>
            <img src={this.state.index==4?require('../../static/images/ygfed.png'):require('../../static/images/ygf.png')} alt=""/>
            <span>我的</span>
          </div>
        </div>
      </div>)
  }
}

export default Bottom;