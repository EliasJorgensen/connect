import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

require('./index.css');

class ChatMessage extends Component {

  render () {

    // configure formatting
    let msg = this.props.message;
    let hours = new Date(msg.timestamp).getHours();
    let minutes = new Date(msg.timestamp).getMinutes();
    hours = (hours < 9) ? '0' + hours : hours;
    minutes = (minutes < 9) ? '0' + minutes : minutes;

    return (
      <ListItem disabled={true} style={{paddingTop: '4px', paddingBottom: '4px'}}>
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
