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
          <div className="chatInput">
            <Paper style={{paddingLeft: '10px', paddingRight: '10px'}}>
              <TextField
                hintText="Message"
                fullWidth={true}
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
        </span>
      </div>
    );
  }

}

ChatInput.propTypes = {

};

export default ChatInput;
