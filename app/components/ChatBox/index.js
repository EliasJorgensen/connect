import React, { Component, PropTypes } from 'react';
import ChatMessage from 'components/ChatMessage';
import List from 'material-ui/lib/lists/list';


import './index.css';

class ChatBox extends Component {

  render () {

    let messages; // map over messages array and form chatMessage components

    const msg = {
      date: new Date(),
      content: 'Test Content right here bruh',
      author: 'Elias'
    }
    const msg2 = {
      date: new Date(),
      content: 'This is some neat stuff right here',
      author: 'Aksel'
    }

    return (
      <div className="chatbox">
        <ChatMessage message={msg} />
        <ChatMessage message={msg2} />
      </div>
    );
  }

}

ChatBox.propTypes = {

};

export default ChatBox;
