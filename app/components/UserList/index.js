import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import Paper from 'material-ui/lib/paper';
import PersonIcon from 'material-ui/lib/svg-icons/social/person';
import { green500 } from 'material-ui/lib/styles/colors';
import './index.css';


const UserList = (props) => (
  <Paper className="user-list">
    <List>
      <Subheader>{props.header}</Subheader>
      <ListItem
        primaryText="Elias"
        disabled={true}
        leftIcon={<PersonIcon style={{ fill: green500}} />}
      />
      <ListItem
        primaryText="Aksel"
        disabled={true}
        leftIcon={<PersonIcon style={{ fill: green500}} />}
      />
    </List>
  </Paper>
);

UserList.propTypes = {
  header: PropTypes.string.isRequired,
  users:  PropTypes.array.isRequired,
};

export default UserList;
