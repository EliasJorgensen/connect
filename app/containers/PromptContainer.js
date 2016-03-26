import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Prompt from 'components/Prompt';

class PromptContainer extends Component {
  constructor () {
    super();
    // use PureRenderMixin
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    // set initial state
    this.state = {
      room:              '',
      nickname:          '',
      roomErrorText:     '',
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

    // push user to Room route
    this.context.router.push(`/room/${room}`);

    console.log("Form submitted:", this.state.room, this.state.nickname);
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
        onSubmit={(e) => this.handleSubmit(e)}
        onRoomUpdate={(e) => this.handleRoomUpdate(e)}
        onNicknameUpdate={(e) => this.handleNickNameUpdate(e)}
        room={this.state.room}
        nickname={this.state.nickname}
        roomErrorText={this.state.roomErrorText}
        nicknameErrorText={this.state.nicknameErrorText} />
    )
  }
}

export default PromptContainer;
