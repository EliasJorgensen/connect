import React, { PropTypes } from 'react';

// import components
import UserList  from 'components/UserList';
import ChatBox   from 'components/ChatBox';
import ChatInput from 'components/ChatInput';

// test array
let messages = [
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
]

const Room = (props) => (
  <main>
    <div>

      <ChatBox messages={messages} />
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
