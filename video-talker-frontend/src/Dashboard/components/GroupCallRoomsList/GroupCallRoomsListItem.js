import React from 'react';
import * as webRTCGroupHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCallRoomsListItem = ({ room }) => {
  const handleListItemPressed = () => {
    // join the group call
    webRTCGroupHandler.joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <div onClick={handleListItemPressed} className='group_calls_list_item background_main_color'>
      <span>{room.hostName}</span>
    </div>
  );
};

export default GroupCallRoomsListItem;
