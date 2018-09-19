import React from 'react'
import './header.less'

import { NavBar, Icon } from 'antd-mobile';
import Imglist from '../swiper/swiper'

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      index : 1
    }
  }
  componentDidMount(){
    console.log(this.state.index)
  }
  render(){
      var style = {
        height: '200px',
        lineHeight: '200px',
        textAlign: 'center'
      } 
      return (
        <div>
          <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >首页</NavBar>
        <Imglist arr={['http://testdoc1.oss-cn-beijing.aliyuncs.com/GWhZxEKHnZ.jpg','http://testdoc1.oss-cn-beijing.aliyuncs.com/GWhZxEKHnZ.jpg']}></Imglist>
        
      </div>
        
      )
  }
}

export default Header