import React from 'react';
import ActiveUsersListItem from './ActiveUsersListItem';

import './ActiveUsersList.css';

const activeUsers = [
  {
    socketId: 321,
    username: 'User1'
  },
  {
    socketId: 333,
    username: 'User2'
  },
  {
    socketId: 432,
    username: 'User3'
  },
  {
    socketId: 345,
    username: 'User4'
  }
];

const ActiveUsersList = () => {
  return (
    <div className='active_user_list_container'>
      {activeUsers.map((activeUser) =>
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />)}
    </div>
  );
};

export default ActiveUsersList;
