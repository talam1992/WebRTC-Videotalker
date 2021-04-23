import React from 'react';
import ActiveUsersListItem from './ActiveUsersListItem';
import { connect } from 'react-redux';

import './ActiveUsersList.css';

// const activeUsers = [
//   {
//     socketId: 321,
//     username: 'user1'
//   },
//   {
//     socketId: 333,
//     username: 'user2'
//   },
//   {
//     socketId: 432,
//     username: 'user3'
//   },
//   {
//     socketId: 345,
//     username: 'user4'
//   }
// ];

const ActiveUsersList = ({ activeUsers }) => {
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

const mapStateToProps = ({ dashboard }) => ({
  ...dashboard
});

export default connect(mapStateToProps)(ActiveUsersList);
