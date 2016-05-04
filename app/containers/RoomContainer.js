import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import component
import Room from 'components/Room';

// test array
let users = [
  {
    nickname:'Elias',
    id: 1
  },
  {
    nickname:'Someone',
    id: 2
  },
  {
    nickname:'Aksel',
    id: 3
  },
];

// test array
let msg = [
  {
    date: new Date(),
    content: 'Test Content right here bruh',
    author: 'Elias',
    key: 1
  },
  {
    date: new Date(),
    content: 'This is some neat stuff right here',
    author: 'Aksel',
    key: 2
  }
];

class RoomContainer extends Component {
  render () {
    return (
      <Room
      room={this.props.room}
      nickname={this.props.state.nickname}
      users={this.props.state.users}
      messages={msg} />
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    room:  ownProps.params.id,
    state: state.room
  };
}

function mapDispatchToProps (dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomContainer);
