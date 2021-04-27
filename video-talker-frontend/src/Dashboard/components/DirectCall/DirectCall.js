import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog';
import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog';
import CallingDialog from '../CallingDialog/CallingDialog';

const DirectCall = (props) => {
    const { localStream, remoteStream } =  props;
    return (
        <>
            <LocalVideoView localStream={localStream} />
            {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
            {<CallRejectedDialog />}
            {<IncomingCallDialog />}
            {<CallingDialog />}
        </>
    );
};

function mapStateToProps ({call}) {
    return{
        ...call
    }
}

export default connect(mapStateToProps, null)(DirectCall);