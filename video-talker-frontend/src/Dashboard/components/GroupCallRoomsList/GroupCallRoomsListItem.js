import React from 'react';

const GroupCallRoomsListItem = ({ room }) => {
  const handleListItemPressed = () => {
    // join the group call
  };

  return (
    <div onClick={handleListItemPressed} className='group_calls_list_item background_main_color'>
      <span>{room.hostName}</span>
    </div>
  );
};

export default GroupCallRoomsListItem;
