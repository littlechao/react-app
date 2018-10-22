import React from 'react';

import Header from './Header'
import Content from './Content'

import Api from '../../api/index'

let listData = require('../../data/data_index.js');
class zhihuIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listData:[],
      
    }
  }
  getList(){
    Api.get('question-list').then((res)=>{
      this.setState({
        listData : res.data
      })
      console.log(this.state)
    })
  }

  componentWillMount(){
    console.log(listData.index)
    this.getList();
    Api.post('question-add',{
      feed_source_txt:'231', 
      feed_source_id:'321', 
      answer_id:'12',
      feed_source_name:'4327714',
      comment_num:'423671',
      good_num:'434121',
      answer_ctnt:'434421',
      question:'4324441',
      feed_source_img:'4324441'
    }).then((res)=>{
      this.getList();
      console.log(res)
    })
  }
  getRefresh(ev){
    this.getList();
  }
  render(){
   
    let listDom = this.state.listData.map((item,index)=> {
      return (<Content getRefresh={this.getRefresh.bind(this)} visible={index==0?true:false} data={item} key={index} />)
    });
    return (
      <React.Fragment>
        <div style={{paddingBottom:"55px",paddingTop:"62px"}}>
          <Header />
          {listDom}
        </div>
        
      </React.Fragment>
    )
  }
}

export default zhihuIndex;