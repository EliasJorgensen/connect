import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from 'actions';

// import presentational component
import Prompt from 'components/Prompt';

class PromptContainer extends Component {

  // handle submit event
  handleSubmit (e) {
    // prevent form from using the default blocking submit
    e.preventDefault();

    const { room, nickname, nicknameReserved } = this.props.state;

    if (!room || !nickname) {
      this.handleError(room, nickname);
      return;
    } else if (nicknameReserved) {
      return; // refuse to submit when nickname is already in use in current room
    }

    console.log("Form submitted:", room, nickname);

    // push user to Room route
    this.props.actions.pushToRoute('/room/' + room);
  }

  // handle update of Room input field (also check nickname)
  handleRoomUpdate (e) {
    this.props.actions.updateRoom(e.target.value);

    // handle disabled nickname input - and check server if nickname is in use
    if (e.target.value !== "") {
      this.props.actions.setNicknameDisabled(false);
      // only check nickname if it isn't empty
      if (this.props.state.nickname !== "") {
        this.props.actions.checkNickname(this.props.state.nickname, e.target.value);
      }
    } else {
      // only disable nickname if nickname is empty
      this.props.actions.setNicknameDisabled(true);
    }

    this.props.actions.checkRoom(e.target.value);
  }

  // handle update of Nickname input field (and check if nickname is reserved)
  handleNicknameUpdate (e) {
    this.props.actions.updateNickname(e.target.value);
    this.props.actions.checkNickname(e.target.value, this.props.state.room)
  }

  handleError (room, nickname) {
    if (!room) {
      this.props.actions.setRoomError(true);
    } else {
      this.props.actions.setRoomError(false);
    }

    if (!nickname) {
      this.props.actions.setNicknameError(true);
    } else {
      this.props.actions.setNicknameError(false);
    }
  }

  render () {
    return (
      <Prompt
        header="Access Connect"
        onSubmit={(e) => this.handleSubmit(e)}
        onRoomUpdate={(e) => this.handleRoomUpdate(e)}
        room={this.props.state.room}
        roomError={this.props.state.roomError}
        roomReserved={this.props.state.roomReserved}
        onNicknameUpdate={(e) => this.handleNicknameUpdate(e)}
        nickname={this.props.state.nickname}
        nicknameError={this.props.state.nicknameError}
        nicknameReserved={this.props.state.nicknameReserved}
        nicknameDisabled={this.props.state.nicknameDisabled} />
    )
  }
}

PromptContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  state:   PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    state: state.prompt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateNickname: (nickname, room) => {
        dispatch(actions.updateNickname(nickname));
      },
      setNicknameDisabled: (bool) => {
        dispatch(actions.setNicknameDisabled(bool));
      },
      setNicknameError: (bool) => {
        dispatch(actions.setNicknameError(bool));
      },
      checkNickname: (nickname, room) => {
        dispatch(actions.asyncCheckNickname(nickname, room));
      },
      updateRoom: (room) => {
        dispatch(actions.updateRoom(room));
      },
      setRoomError: (bool) => {
        dispatch(actions.setRoomError(bool));
      },
      checkRoom: (room) => {
        dispatch(actions.asyncCheckRoom(room));
      },
      pushToRoute: (route) => {
        dispatch(push(route));
      },
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromptContainer);
