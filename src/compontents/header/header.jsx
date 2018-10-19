import React from 'react'
import ReactDOM from 'react-dom';
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { createForm } from 'rc-form';
// import propTypes from 'prop-types';
import { Card, List, InputItem ,SwipeAction,PullToRefresh, Button} from 'antd-mobile';
import Imglist from '../swiper/swiper'
import Util from "../../static/js/util.js";
import './header.less'
import {addToCart,deleteFromCart,updateCart} from '../../actions/cart-actions.js'

/****
 * @constructor Header
 * @description 首页页面 
 * ***/

const mapStateToProps = state => state.shoppingCart;
const mapDispatchToProps = (dispatch) => ({
  addToCart : (params) => dispatch(addToCart(params)),
  deleteFromCart:(params) => dispatch(deleteFromCart(params)),
  updateCart:(params) => dispatch(updateCart(params))
})
// @connect(
//   state => state.products
// )
function genData() {
  const dataArr = [];
  for (let i = 0; i < 10; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      index : 1
    }
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
    this.addTask = this.addTask.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    // this.props.addToCart({title: "测试1", 
    //   time:"2018-10-11",
    //    content:"测试内容1",})
  }
  componentDidMount(){
    console.log(this)
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      // data: genData(),
    }), 0);
    console.log(this.state.index)
  }
  addTask() {
    var params =  {
      title: this.autoFocusInst.state.value, 
      time:Util.getTime(),
      content:this.inputRef.state.value,
      done: false
    }
    this.props.addToCart(params);
    
    // this.autoFocusInst.state.value = '';
    // this.inputRef.state.value = '';
  }
  renderTask () {
    return this.props.cart.map((item)=> {
      return (
        <React.Fragment key={item.title}>
          <div style={{height:'10px',width:'100%'}}></div>
          <List>
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: '取消',
                  onPress: () => console.log(this.props),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: '删除',
                  onPress: () => this.props.deleteFromCart(item.title),
                  style: { backgroundColor: '#108ee9', color: 'white' },
                },
                {
                  text: '完成',
                  onPress: () => this.props.updateCart(item.title),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global close')}
              onClose={() => console.log('global close')}
            >
              <List.Item
                arrow="horizontal"
                onClick={e => console.log(e)}
              >
                {/* <WingBlank size="lg">
                  <div style={{height:'10px',width:'100%'}}></div> */}
                  <Card full>
                    <Card.Header
                      title={item.title}
                      thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                      extra={<span>{item.time}</span>}
                    />
                    <Card.Body>
                      <div>{item.content}</div>
                    </Card.Body>
                  </Card>
                {/* </WingBlank> */}
              </List.Item>
              {item.done?<div className="text-status-complate">已完成</div>:<div className="text-status-complate">未完成</div>}
            </SwipeAction>
          </List>
         
        </React.Fragment>
      )
    })
  }
  render(){
      const { getFieldProps } = this.props.form;
      let ImgArr = [
        'http://119.29.253.107/images/1.jpg',
        'http://119.29.253.107/images/2.jpg',
        'http://119.29.253.107/images/3.jpg',
        'http://119.29.253.107/images/4.jpg'
      ]
      return (
        <div>
        <DocumentTitle title="全部任务"/>
        <Imglist arr={ImgArr}></Imglist>
        {/* <SearchBar placeholder="查找任务" maxLength={8} /> */}
        <List renderHeader={() => '内容'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="请输入标题"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="请输入内容"
            ref={el => this.inputRef = el}
          >内容</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              <Button type="primary" onClick={this.addTask}>添加</Button>
            </div>
          </List.Item>
        </List>
        
        {/* <Button
          style={{ marginBottom: 15 }}
          onClick={() => this.setState({ down: !this.state.down })}
        >
          direction: {this.state.down ? 'down' : 'up'}
        </Button> */}
        {/* <button onClick={this.addCart}>点击</button>
        {this.props.cart.map(item => JSON.stringify(item))} */}
        <PullToRefresh
          damping={60}
          ref={el => this.ptr = el}
          style={{
            height: this.state.height-50,
            overflow: 'auto'
          }}
          indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            setTimeout(() => {
              this.setState({ refreshing: false });
            }, 1000);
          }}
        >
        {this.renderTask()}
          {/* {this.state.data.map(i => (
            <div key={i} style={{ textAlign: 'center', padding: 20 }}>
              {this.state.down ? 'pull down' : 'pull up'} {i}
            </div>
          ))} */}
        </PullToRefresh>
      </div>
        
      )
  }
}

// Header.propTypes = {
  
// }

export default createForm()(connect(mapStateToProps,mapDispatchToProps)(Header));