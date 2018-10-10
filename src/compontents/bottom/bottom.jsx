// import React from 'react';
// import {withRouter} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './bottom.less'
// import { Icon} from 'antd-mobile';

// class Bottom extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//       index : 0
//     }
//     this.changeActive = this.changeActive.bind(this)
//   }
//   changeActive(val) {
//     console.log(val)
//     this.setState({ index: val });
//   }
//   render() {
//     return (
//       <div className="bottom-wrapper">
//         <div className="bottom">
//           <div className={['item',this.state.index===0&&'active'].join(' ')} onClick={this.changeActive.bind(this,0)}>
//             <Link to="/home" activeClassName="active" activeStyle={{color: '#ff8f00'}}>
//               <img src={this.state.index==0?require('../../static/images/messaged.png'):require('../../static/images/message.png')} alt=""/>
//               <span>首页</span>
//             </Link>
//           </div>
//           <div className={['item',this.state.index===1&&'active'].join(' ')} onClick={this.changeActive.bind(this,1)}>
//             <Link to="/message/2">
//               <img src={this.state.index==1?require('../../static/images/classed.png'):require('../../static/images/class.png')} alt=""/>
//               <span>消息</span>
//             </Link>
//           </div>
//           <div className={['item',this.state.index===2&&'active'].join(' ')} onClick={this.changeActive.bind(this,2)}>
//             <Link to="/inbox">
//             <img src={this.state.index==2?require('../../static/images/iconed.png'):require('../../static/images/icon.png')} alt=""/>
//               <span>我的</span>
//             </Link>
//           </div>
//         </div>
//       </div>)
//   }
// }

// export default Bottom;

import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

const mapStateToProps = state => state.shoppingCart;

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
      selectedTab: 0,
      tabs: [
        {
            id:0,
            tit:'全部',
            icon:"http://test.hihiworld.com/web/static/img/find.png",
            selectedIcon:'http://test.hihiworld.com/web/static/img/findon.png',
            hash:'/home'
        },
        {
            id:1,
            tit:'已完成',
            icon:"http://test.hihiworld.com/web/static/img/work.png",
            selectedIcon:'http://test.hihiworld.com/web/static/img/workon.png',
            hash:'/message'
        },
        {
            id:2,
            tit:'未完成',
            icon:"http://test.hihiworld.com/web/static/img/My.png",
            selectedIcon:'http://test.hihiworld.com/web/static/img/myon.png',
            hash:'/inbox'
        }
      ],
    };
  }

  renderIcons(icon) {
    return (
        <div style={{
            width: '22px',
            height: '22px',
            background: `url(${icon}) center center /  21px 21px no-repeat`,
        }}/>
    )
  }

  onPress(item) {
    this.state.selectedTab = item.id;
    this.props.history.replace(item.hash);
  }
  getNum(num) {
    var totle,finalNum = 0;
    this.props.cart.map((item)=> {
      if(item.done) {
        ++finalNum
      }
    })
    if (num== 0) {
      totle = this.props.cart.length;
    } else if (num== 1) {
      totle = finalNum;
    } else {
      totle = this.props.cart.length - finalNum;
    }
    return totle;
  }
  renderItems() {
    return this.state.tabs.map((item) => {
        return (
            <TabBar.Item
                prerenderingSiblingsNumber={0}
                title={item.tit}
                key={item.id}
                badge={this.getNum(item.id)}
                icon={this.renderIcons(item.icon)}
                selectedIcon={this.renderIcons(item.selectedIcon)}
                selected={this.state.selectedTab === item.id}
                onPress={() => {
                    this.onPress(item)
                }}
            >
            </TabBar.Item>
        )
    })
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '60px', width: '100%', bottom: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
         {this.renderItems()}
          {/* <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item> */}
        </TabBar>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Bottom));