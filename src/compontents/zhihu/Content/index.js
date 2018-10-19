import React from 'react';
import './index.less';
class zhihuContent extends React.Component {
  constructor(props){
    super(props)
    const requireUrl = props.data.feed_source_img.toString();
    // console.log(require(requireUrl))
    this.state = {
      // url: require('"requireUrl"')
    }
  }
  componentDidMount(){
  }
  render(){
    return (
      <React.Fragment>
        <div className="wrapperCon">  
          <div className="header">
            <div className="left">
              <img src={require('../../../assets/images/icon1.jpeg')} alt=""/>
              <span>{this.props.data.feed_source_name}</span>
            </div>
            <div className="right">
              <img src={require('../../../assets/images/more.png')} alt=""/>
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