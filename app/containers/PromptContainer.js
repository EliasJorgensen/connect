import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

// import presentational component
import Prompt from 'components/Prompt';

class PromptContainer extends Component {

  constructor () {
    super();

    this.state = {
      room: '',
      nickname: '',
      roomErrorText    : '',
      nicknameErrorText: ''
    }
  }

  // handle submit event
  handleSubmit (e) {
    // prevent form from using the default blocking submit
    e.preventDefault();

    const { room, nickname } = this.state;

    if (!room || !nickname) {
      this.handleError(room, nickname);
      return;
    }

    // remove error formatting from input fields, if any
    this.setState({
      roomErrorText    : '',
      nicknameErrorText: ''
    });

    console.log("Form submitted:", this.state.room, this.state.nickname);

    // push user to Room route
    this.context.router.push(`/room/${room}`);
  }

  // handle update of Room input field
  handleRoomUpdate (e) {
    this.setState({
      room: e.target.value
    });
  }

  // handle update of Nickname input field
  handleNickNameUpdate (e) {
    this.setState({
      nickname: e.target.value
    });
  }

  handleError (room, nickname) {
    if (!room) {
      console.log('Room is missing');
      this.setState({
        roomErrorText: 'Room is missing'
      });
    } else {
      this.setState({
        roomErrorText: ''
      });
    }

    if (!nickname) {
        console.log('Nickname is missing');
        this.setState({
          nicknameErrorText: 'Nickname is missing'
        });
    } else {
      this.setState({
        nicknameErrorText: ''
      });
    }
  }

  render () {
    return (
      <Prompt
        header="Access Connect"
        onSubmit={(e) => this.updateNickname(e)}
        onRoomUpdate={(e) => this.updateNickname(e)}
        onNicknameUpdate={(e) => this.updateNickname(e)}
        room={this.state.room}
        nickname={this.state.nickname}
        roomErrorText={this.state.roomErrorText}
        nicknameErrorText={this.state.nicknameErrorText} />
    )
  }
}

PromptContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  state:   PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    state: state.promptState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default PromptContainer;

/*
const deprecatedShit = {

}; */
