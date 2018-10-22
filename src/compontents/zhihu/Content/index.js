import React from 'react';
import { Popover, Icon } from 'antd-mobile';
import './index.less';

import Api from '../../../api/index'

class zhihuContent extends React.Component {
  constructor(props){
    super(props)
    // const requireUrl = props.data.feed_source_img.toString();
    // console.log(require(requireUrl))
    this.state = {
      visible: true,
      selected: '',
      // url: require('"requireUrl"')
    }
    this.onSelect = this.onSelect.bind(this)
  }
  handleVisibleChange = (visible) => {
    console.log('handleVisibleChange')
    this.setState({
      visible,
    });
  };
  onSelect() {
    console.log(this.props.data.question_id)
    Api.get('question-delete/'+this.props.data.question_id).then((res)=>{
      console.log(res)
      this.props.getRefresh()
    })
  }
  componentDidMount(){
    console.log(this.props.data.question_id)
  }
  render(){
    const Item = Popover.Item;
    const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
    return (
      <React.Fragment>
        
        <div className="wrapperCon">  
          <div className="header">
            <div className="left">
              <img src={require('../../../assets/images/icon1.jpeg')} alt=""/>
              <span>{this.props.data.feed_source_name}</span>
            </div>
            <div className="right">
              {/* <img src={require('../../../assets/images/more.png')} alt=""/> */}
              <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={false}
                overlay={[
                  (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">删除</Item>),
                ]}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 },
                  offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
              >
                <div style={{
                  height: '100%',
                  padding: '0 15px',
                  marginRight: '0px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                >
                  <Icon type="ellipsis" />
                </div>
              </Popover>
            </div>
          </div>
          <h3>{this.props.data.question}</h3>
          <div className="container">{this.props.data.answer_ctnt}</div>
          <div className="bottom">
          {this.props.data.good_num}赞同
          <sup>.</sup>
          {this.props.data.comment_num}评论
          <sup>.</sup>关注问题</div>
        </div>
      </React.Fragment>
    )
  }
}

export default zhihuContent;








// const Item = Popover.Item;

// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
// class App extends React.Component {
//   state = {
//     visible: true,
//     selected: '',
//   };
//   onSelect = (opt) => {
//     // console.log(opt.props.value);
//     this.setState({
//       visible: false,
//       selected: opt.props.value,
//     });
//   };
//   handleVisibleChange = (visible) => {
//     this.setState({
//       visible,
//     });
//   };
//   render() {
//     return (<div>
//       <NavBar
//         mode="light"
//         rightContent={
//           <Popover mask
//             overlayClassName="fortest"
//             overlayStyle={{ color: 'currentColor' }}
//             visible={this.state.visible}
//             overlay={[
//               (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
//               (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
//               (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
//                 <span style={{ marginRight: 5 }}>Help</span>
//               </Item>),
//             ]}
//             align={{
//               overflow: { adjustY: 0, adjustX: 0 },
//               offset: [-10, 0],
//             }}
//             onVisibleChange={this.handleVisibleChange}
//             onSelect={this.onSelect}
//           >
//             <div style={{
//               height: '100%',
//               padding: '0 15px',
//               marginRight: '-15px',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//             >
//               <Icon type="ellipsis" />
//             </div>
//           </Popover>
//         }
//       >
//         NavBar
//       </NavBar>
//     </div>);
//   }
// }

// ReactDOM.render(<App />, mountNode);