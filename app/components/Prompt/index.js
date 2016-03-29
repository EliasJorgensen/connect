import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import './index.css';

const styles = {
  underlineStyle: {
    borderColor: Colors.teal500,
  },
  buttonColor: Colors.indigoA200,
};

const Prompt = (props) => {
  <main className="centerBothAxis">
    <Paper className="roomFormContainer" rounded={false}>
      <h2 className="text-center">{props.header}</h2>
      <form onSubmit={props.onSubmit} id="Prompt">
        <TextField
          hintText="Room name"
          fullWidth={true}
          underlineFocusStyle={styles.underlineStyle}
          onChange={props.onRoomUpdate}
          value={props.room}
          errorText={props.roomErrorText} />
        <br/><br/>
        <TextField
          hintText="Nickname"
          fullWidth={true}
          underlineFocusStyle={styles.underlineStyle}
          onChange={props.onNicknameUpdate}
          value={props.nickname}
          errorText={props.nicknameErrorText} />
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
};

Prompt.propTypes = {
  onSubmit:          PropTypes.func.isRequired,
  onRoomUpdate:      PropTypes.func.isRequired,
  onNicknameUpdate:  PropTypes.func.isRequired,
  room:              PropTypes.string.isRequired,
  nickname:          PropTypes.string.isRequired,
  header:            PropTypes.string.isRequired,
  roomErrorText:     PropTypes.string,
  nicknameErrorText: PropTypes.string,
};

export default Prompt;
