import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import './index.css';

const styles = {
  underlineStyle: {
    borderColor: '#009688',
  },
  buttonColor: '#536dfe',
};

class Prompt extends Component {

  setRoomError () {
    if (this.props.roomReserved) {
      return "Room is in use, but you are free to join";
    } else if (this.props.roomError) {
      return "Room is missing";
    } else {
      return "";
    }
  }

  setNicknameError () {
    if (this.props.nicknameReserved) {
      return "Nickname is already being used in current room.";
    } else if (this.props.nicknameError) {
      return "Nickname is missing";
    } else {
      return "";
    }
  }

  render () {
    return (
      <main className="centerBothAxis">
        <Paper className="roomFormContainer" rounded={false}>
          <h2 className="text-center">{this.props.header}</h2>
          <form onSubmit={this.props.onSubmit} id="Prompt">
            <TextField
              hintText="Room name"
              fullWidth={true}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.props.onRoomUpdate}
              value={this.props.room}
              errorText={this.setRoomError()} />
            <br/><br/>
            <TextField
              hintText="Nickname"
              fullWidth={true}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.props.onNicknameUpdate}
              value={this.props.nickname}
              errorText={this.setNicknameError()}
              disabled={this.props.nicknameDisabled} />
            <br/><br/><br/>
            <RaisedButton
              label="Enter"
              fullWidth={true}
              backgroundColor={styles.buttonColor}
              labelColor="white"
              type="submit" />
          </form>
        </Paper>
      </main>
    )
  }
}

Prompt.propTypes = {
  onSubmit:         PropTypes.func.isRequired,
  onRoomUpdate:     PropTypes.func.isRequired,
  onNicknameUpdate: PropTypes.func.isRequired,
  room:             PropTypes.string.isRequired,
  nickname:         PropTypes.string.isRequired,
  header:           PropTypes.string.isRequired,
  roomError:        PropTypes.bool,
  roomReserved:     PropTypes.bool,
  nicknameError:    PropTypes.bool,
  nicknameReserved: PropTypes.bool,
  nicknameDisabled: PropTypes.bool,
};

export default Prompt;
