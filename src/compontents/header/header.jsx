import React from 'react'
import ReactDOM from 'react-dom';
import DocumentTitle from "react-document-title";
import './header.less'
import { connect } from "react-redux";
import { createForm } from 'rc-form';
import { NavBar, Icon ,SearchBar,Card, WhiteSpace , WingBlank,List, InputItem } from 'antd-mobile';
import Imglist from '../swiper/swiper'
import { PullToRefresh, Button } from 'antd-mobile';
import {addToCart} from '../../actions/cart-actions.js'

import Util from "../../static/js/util.js";
const mapStateToProps = state => state.shoppingCart;

const mapDispatchToProps = (dispatch) => ({
  addToCart : (params) => dispatch(addToCart(params))
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
    console.log(this.props)
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
    // this.props.addToCart({product: 'bread 100g',quantity: 3,unitCost: 100})
    console.log(this.state.index)
  }
  addTask() {
    console.log(this.autoFocusInst.state.value)
    console.log(this.inputRef.state.value)
    var params =  {
      title: this.autoFocusInst.state.value, 
      time:Util.getTime(),
      content:this.inputRef.state.value,
      done: false
    }
    console.log(params)
    this.props.addToCart(params);
    this.autoFocusInst.state.value = '';
    this.inputRef.state.value = '';
  }
  renderTask () {
    return this.props.cart.map((item)=> {
      return (
        <WingBlank size="lg">
          <div style={{height:'10px',width:'100%'}}></div>
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
        </WingBlank>
      )
    })
  }
  render(){
      const { getFieldProps } = this.props.form;
      var style = {
        height: '200px',
        lineHeight: '200px',
        textAlign: 'center'
      } 
      return (
        <div>
        <DocumentTitle title="全部任务"/>
        <SearchBar placeholder="查找任务" maxLength={8} />
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
        {/* <Imglist arr={['http://testdoc1.oss-cn-beijing.aliyuncs.com/GWhZxEKHnZ.jpg','http://testdoc1.oss-cn-beijing.aliyuncs.com/GWhZxEKHnZ.jpg']}></Imglist> */}
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

export default createForm()(connect(mapStateToProps,mapDispatchToProps)(Header));


// import { List, InputItem, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';

// class BasicInputExample extends React.Component {
//   componentDidMount() {
//     // this.autoFocusInst.focus();
//   }
//   handleClick = () => {
//     this.inputRef.focus();
//   }
//   render() {
//     const { getFieldProps } = this.props.form;
//     return (
//       <div>
//         <List renderHeader={() => 'Customize to focus'}>
//           <InputItem
//             {...getFieldProps('autofocus')}
//             clear
//             placeholder="auto focus"
//             ref={el => this.autoFocusInst = el}
//           >标题</InputItem>
//           <InputItem
//             {...getFieldProps('focus')}
//             clear
//             placeholder="click the button below to focus"
//             ref={el => this.inputRef = el}
//           >标题</InputItem>
//           <List.Item>
//             <div
//               style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
//               onClick={this.handleClick}
//             >
//               click to focus
//             </div>
//           </List.Item>
//         </List>

//         <List renderHeader={() => 'Whether is controlled'}>
//           <InputItem
//             {...getFieldProps('control')}
//             placeholder="controled input"
//           >受控组件</InputItem>
//           <InputItem
//             defaultValue="Title"
//             placeholder="please input content"
//             data-seed="logId"
//           >非受控组件</InputItem>
//         </List>

//         <WhiteSpace />

//         <List renderHeader={() => 'Click label to focus input'}>
//           <InputItem
//             placeholder="click label to focus input"
//             ref={el => this.labelFocusInst = el}
//           ><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>
//         </List>

//         <List renderHeader={() => 'Show clear'}>
//           <InputItem
//             {...getFieldProps('inputclear')}
//             clear
//             placeholder="displayed clear while typing"
//           >标题</InputItem>
//         </List>

//         <WhiteSpace />

//         <List renderHeader={() => 'Number of words for title'}>
//           <InputItem
//             {...getFieldProps('label8')}
//             placeholder="limited title length"
//             labelNumber={5}
//           >标题过长超过默认的5个字</InputItem>
//         </List>

//         <WhiteSpace />

//         <List renderHeader={() => 'Custom title（text / image / empty)'}>
//           <InputItem
//             {...getFieldProps('input3')}
//             placeholder="no label"
//           />
//           <InputItem
//             {...getFieldProps('inputtitle2')}
//             placeholder="title can be icon，image or text"
//           >
//             <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
//           </InputItem>
//         </List>

//         <WhiteSpace />

//         <List renderHeader={() => 'Customize the extra content in the right'}>
//           <InputItem
//             {...getFieldProps('preice')}
//             placeholder="0.00"
//             extra="¥"
//           >价格</InputItem>
//         </List>

//         <WhiteSpace />
//         <List renderHeader={() => 'Format'}>
//           <InputItem
//             {...getFieldProps('bankCard', {
//               initialValue: '8888 8888 8888 8888',
//             })}
//             type="bankCard"
//           >银行卡</InputItem>
//           <InputItem
//             {...getFieldProps('phone')}
//             type="phone"
//             placeholder="186 1234 1234"
//           >手机号码</InputItem>
//           <InputItem
//             {...getFieldProps('password')}
//             type="password"
//             placeholder="****"
//           >密码</InputItem>
//           <InputItem
//             {...getFieldProps('number')}
//             type="number"
//             placeholder="click to show number keyboard"
//           >数字键盘</InputItem>
//           <InputItem
//             {...getFieldProps('digit')}
//             type="digit"
//             placeholder="click to show native number keyboard"
//           >数字键盘</InputItem>
//         </List>

//         <WhiteSpace />

//         <List renderHeader={() => 'Not editable / Disabled'}>
//           <InputItem
//             value="not editable"
//             editable={false}
//           >姓名</InputItem>
//           <InputItem
//             value="style of disabled `InputItem`"
//             disabled
//           >姓名</InputItem>
//         </List>
//       </div>
//     );
//   }
// }

// const BasicInputExampleWrapper = createForm()(BasicInputExample);
// ReactDOM.render(<BasicInputExampleWrapper />, mountNode);