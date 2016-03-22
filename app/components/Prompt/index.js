import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import './index.css';

const styles = {
  underlineStyle: {
    borderColor: Colors.indigoA200,
  },
  buttonColor: Colors.indigoA200
};

export default () => (
  <main className="centerBothAxis">
    <Paper className="roomFormContainer">
      <h2 className="text-center">Access Connect</h2>
      <TextField hintText="Room name" fullWidth={true}
        underlineFocusStyle={styles.underlineStyle} />
      <br/><br/>
        <TextField hintText="Nickname" fullWidth={true}
          underlineFocusStyle={styles.underlineStyle} />
      <br/><br/><br/>
      <RaisedButton label="Enter" fullWidth={true}
        backgroundColor={styles.buttonColor} labelColor="white" />
    </Paper>
  </main>
);
