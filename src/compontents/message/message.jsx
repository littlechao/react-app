import React from 'react';
import { Tabs } from 'antd-mobile';
import DocumentTitle from "react-document-title";
import './message.less'
// const SwipeActionExample = () => (
  
// );
class Message extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>{tab.title}</p>
    </div>);
  handleClick() {
    console.log('handleClick')
  }
  render(){

    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' }
    ];
    var style = {
      height: '400px'
    } 

    return (
      <div>
        <DocumentTitle title="正在进行"/>
        <Tabs tabs={tabs} style={style} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {this.renderContent}
        </Tabs>
      </div>
    )
  }
}

export default Message;


