import React from 'react';
import { SwipeAction, List,Tabs, WhiteSpace } from 'antd-mobile';
import DocumentTitle from "react-document-title";
import './message.less'
// const SwipeActionExample = () => (
  
// );
class Message extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);
  constructor() {
    super();
  }
  handleClick() {
    console.log('handleClick')
  }
  render(){

    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
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
        <List>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                text: 'Cancel',
                onPress: () => console.log('cancel'),
                style: { backgroundColor: '#ddd', color: 'white' },
              },
              {
                text: 'Delete',
                onPress: () => console.log('delete'),
                style: { backgroundColor: '#F4333C', color: 'white' },
              },
            ]}
            left={[
              {
                text: 'Reply',
                onPress: () => console.log('reply'),
                style: { backgroundColor: '#108ee9', color: 'white' },
              },
              {
                text: 'Cancel',
                onPress: () => console.log('cancel'),
                style: { backgroundColor: '#ddd', color: 'white' },
              },
            ]}
            onOpen={() => console.log('global close')}
            onClose={() => console.log('global close')}
          >
            <List.Item
              extra="More"
              arrow="horizontal"
              onClick={e => console.log(e)}
            >
              Have left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
        Message</div>
    )
  }
}

export default Message;


