import React from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';

import './GroupCallRoomsList.css';

const dummyList = [
  {
    roomId: '123123',
    hostName: 'Mark'
  },
  {
    roomId: '3213213',
    hostName: 'Paul'
  }
];

const GroupCallRoomsList = () => {
  return (
    <>
      {dummyList.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} />)}
    </>
  );
};

export default GroupCallRoomsList;
