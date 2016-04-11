import React, { PropTypes } from 'react';

// import components
import UserList from 'components/UserList';

const Room = (props) => (
  <div>
    <UserList
      header="Users in room" />
    <h1 className="lighter">Room ID is: {props.room}</h1>
    <h1 className="lighter">Nickname is: {props.nickname}</h1>
  </div>
);

Room.propTypes = {
  room: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired
};

export default Room;
