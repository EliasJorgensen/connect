import React, { PropTypes } from 'react';

// import components
import UserList  from 'components/UserList';
import ChatBox   from 'components/ChatBox';
import ChatInput from 'components/ChatInput';

const Room = (props) => (
  <main>
    <div>
      <ChatBox messages={props.messages} />
      <UserList
        header="Users in room"
        users={props.users}
        nickname={props.nickname} />
      <ChatInput
        input={props.input}
        updateInput={props.updateInput}
        sendMessage={props.sendMessage} />
    </div>
  </main>
);

Room.propTypes = {
  nickname:    PropTypes.object.isRequired,
  input:       PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  users:       PropTypes.array,
  messages:    PropTypes.array,
};

export default Room;
