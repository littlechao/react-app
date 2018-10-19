import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

const mapStateToProps = state => state.shoppingCart;

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        {
            id:3,
            tit:'知乎',
            icon:"http://test.hihiworld.com/web/static/img/My.png",
            selectedIcon:'http://test.hihiworld.com/web/static/img/myon.png',
            hash:'/zhihuIndex'
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
    this.setState({
      selectedTab : item.id
    })
    this.props.history.replace(item.hash);
  }
  getNum(num) {
    var totle,finalNum = 0;
    this.props.cart.map((item)=> {
      if(item.done) {
        ++finalNum
      }
    })
    if (num=== 0) {
      totle = this.props.cart.length;
    } else if (num=== 1) {
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
      <div style={this.state.fullScreen ? { position: 'fixed', height: '60px', width: '100%', bottom: 0,zIndex:'9' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
         {this.renderItems()}
        </TabBar>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Bottom));