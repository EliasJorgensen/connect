import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import component
import Room from 'components/Room';

const users = [
  "Elias",
  "Aksel",
  "Someone"
];

class RoomContainer extends Component {
  render () {
    return (
      <Room
      room={this.props.room}
      nickname={this.props.nickname}
      users={users} />
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    nickname: state.prompt.nickname,
    room:     ownProps.params.id,
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
