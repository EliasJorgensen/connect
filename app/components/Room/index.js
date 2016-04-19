import React, { PropTypes } from 'react';

// import components
import UserList  from 'components/UserList';
import ChatBox   from 'components/ChatBox';
import ChatInput from 'components/ChatInput';

const Room = (props) => (
  <main>
    <div>

      <ChatBox />
      <UserList
        header="Users in room"
        users={props.users} />
      <ChatInput />
    </div>
  </main>
);

Room.propTypes = {
  room:     PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  users:    PropTypes.array.isRequired
};

export default Room;
