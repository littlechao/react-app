import React from 'react'
import './detail.less'

class Detail extends React.Component{
  constructor(){
    super();
    this.state = {
      index : 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log(this.state.index++)
  }
  render(){
      return (
          <div className="detail" onClick={this.handleClick}>{this.props.title}</div>
      )
  }
}

export default Detail