import React, { Component, PropTypes } from 'react';
import ChatMessage from 'components/ChatMessage';
import List from 'material-ui/lib/lists/list';


import './index.css';

class ChatBox extends Component {

  render () {

    // map over messages prop and create array of ChatMessages
    let messageNodes = this.props.messages.map(message => {
      return (
        <ChatMessage
        message={message}
        key={message.id} />
      );
    });

    return (
      <div className="chatbox">
        <List style={{paddingTop: '10px'}}>
          {messageNodes}
        </List>
      </div>
    );
  }

}

ChatBox.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatBox;
