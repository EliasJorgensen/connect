import React, { PropTypes } from 'react';
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

const Prompt = (props) => (
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
            errorText={props.roomReserved ? 'Room is reserved' : ''} />
          <br/><br/>
          <TextField
            hintText="Nickname"
            fullWidth={true}
            underlineFocusStyle={styles.underlineStyle}
            onChange={props.onNicknameUpdate}
            value={props.nickname}
            errorText={props.nicknameError ? 'Nickname is missing' : ''} />
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
);

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
};

export default Prompt;
