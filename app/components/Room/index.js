import React, { PropTypes } from 'react';
import './index.css';

const Room = (props) => (
  <h1 className="lighter">Room ID is: {props.id}</h1>
);

Room.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Room;
