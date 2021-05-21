import React from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';

import './GroupCallRoomsList.css';

const dummyList = [
    {
        roomId: '123123',
        hostName: 'Room 1'
    },
    {
        roomId: '321321',
        hostName: 'Room 2'
    }
];

const GroupCallRoomsList = () => {
    return (
        <>
            {dummyList.map(room => <GroupCallRoomsListItem key={room.roomId} room={room}/>)} 
        </>
    );
};

export default GroupCallRoomsList;