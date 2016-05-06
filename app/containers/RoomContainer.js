import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from 'actions';

// import component
import Room from 'components/Room';

class RoomContainer extends Component {

  // if user has no nickname, send then back to the prompt
  componentWillMount () {
    // if nickname object has no keys, push to root route
    if (Object.keys(this.props.state.nickname).length  === 0) {
      console.log("Kicking user to root.");
      this.props.pushToRoot();
    }
  }

  // dispatch sendServer action
  handleSendMessage (e) {
    // prevent form from using the default blocking submit
    e.preventDefault();

    const { input } = this.props.state;

    // cancel message, if input field is empty
    if (input === '') {return;}

    this.props.sendMessage({content: input,
        author: this.props.state.nickname.nickname}, this.props.room);
  }

  render () {
    return (
      <Room
      nickname={this.props.state.nickname}
      users={this.props.state.users}
      input={this.props.state.input}
      updateInput={(e) => this.props.updateInput(e.target.value)}
      sendMessage={(e) => this.handleSendMessage(e)}
      messages={this.props.state.messages}
      room={this.props.room} />
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
    updateInput: (value) => {
      dispatch(actions.updateInput(value));
    },
    sendMessage: (input, room) => {
      dispatch(actions.asyncSendMessage(input, room));
    },
    pushToRoot: () => {
      dispatch(push('/'));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomContainer);
