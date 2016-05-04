import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

import './index.css';

class ChatInput extends Component {

  render () {
    return (
      <div className="chatInputWrapper">
        <span>
            <form onSubmit={this.props.sendMessage}>
              <div className="chatInput">
                <Paper style={{paddingLeft: '10px', paddingRight: '10px'}}>
                  <TextField
                    hintText="Message"
                    fullWidth={true}
                    value={this.props.input}
                    onChange={this.props.updateInput}
                    underlineFocusStyle={{borderColor: '#009688'}}
                  />
                </Paper>
              </div>
              <div className="chatInputButton">
                <RaisedButton
                  label="Send"
                  backgroundColor="#536dfe"
                  labelColor="white"
                  type="submit"
                />
              </div>
            </form>
        </span>
      </div>
    );
  }

}

ChatInput.propTypes = {
  input:         PropTypes.string.isRequired,
  updateInput:   PropTypes.func.isRequired,
  sendMessage:   PropTypes.func.isRequired
};

export default ChatInput;
