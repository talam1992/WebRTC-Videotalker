import React from 'react';
import { connect } from 'react-redux';
import GroupCallButton from '../GroupCallButton/GroupCallButton';
import { callStates } from '../../../store/actions/callActions';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCall = (props) => {
    const { callState, localStream }  = props;

    const createRoom = () => {
        // creatie room
        webRTCGroupCallHandler.createNewGroupCall();
    };

    return (
        <>
            {localStream && callState !== callStates.CALL_IN_PROGRESS && 
            <GroupCallButton onClickHandler={createRoom} label='Create room'/>}         
        </>
    );
};

const mapStoreStateToProps = ({ call }) => ({
    ...call
});

export default connect(mapStoreStateToProps)(GroupCall);