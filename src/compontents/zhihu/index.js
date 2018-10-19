import React from 'react';
import Header from './Header'
import Content from './Content'

const listData = require('../../data/data_index.js');
class zhihuIndex extends React.Component {
  componentDidMount(){
    console.log(listData.index)
  }
  render(){
    return (
      <React.Fragment>
        <div style={{paddingBottom:"55px",paddingTop:"62px"}}>
          <Header />
          {
            listData.index.data.map((item,index)=> {
              return (<Content data={item} key={index} />)
            })
          }
        </div>
        
      </React.Fragment>
    )
  }
}

export default zhihuIndex;