import React, { PropTypes } from 'react';

const Room = (props) => (
  <div>
    <h1 className="lighter">Room ID is: {props.room}</h1>
    <h1 className="lighter">Nickname is: {props.nickname}</h1>
  </div>
);

Room.propTypes = {
  room: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired
};

export default Room;
