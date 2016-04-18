import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import Paper from 'material-ui/lib/paper';
import PersonIcon from 'material-ui/lib/svg-icons/social/person';
import { green500 } from 'material-ui/lib/styles/colors';
import './index.css';

class UserList extends Component {

  render () {

    var userNodes = this.props.users.map(user => {
      return (
        <ListItem
          primaryText={user.nickname}
          disabled={true}
          leftIcon={<PersonIcon style={{ fill: green500}} />}
          key={user.id}
        />
      );
    });

    return (
      <Paper className="user-list">
        <List>
          <Subheader>{this.props.header}</Subheader>

          {userNodes}

        </List>
      </Paper>
    );
  }

}

UserList.propTypes = {
  header: PropTypes.string.isRequired,
  users:  PropTypes.array.isRequired,
};

export default UserList;
