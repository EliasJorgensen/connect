import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

import './index.css';

class ChatMessage extends Component {

  render () {

    // configure formatting
    let msg = this.props.message;
    let hours = msg.date.getHours();
    let minutes = msg.date.getMinutes();
    hours = (hours < 9) ? '0' + hours : hours;
    minutes = (minutes < 9) ? '0' + minutes : minutes;

    return (
      <ListItem disabled={true}>
        <div className="chat-message">
          <div className="message-time">[{ hours + ':' + minutes }]</div>
          <div className="message-author">&lt;{msg.author}&gt;</div>
          <div className="message-content">{msg.content}</div>
        </div>
      </ListItem>
    );
  }

}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default ChatMessage;
