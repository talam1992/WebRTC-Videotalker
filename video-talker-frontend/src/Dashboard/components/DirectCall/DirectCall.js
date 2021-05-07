import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog';
import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog';
import CallingDialog from '../CallingDialog/CallingDialog';
import { callStates, setCallRejected } from '../../../store/actions/callActions';
import ConversationButtons from '../ConversationButtons/ConversationButtons';

const DirectCall = (props) => {
    const { localStream, 
        remoteStream, 
        callState, 
        callerUsername, 
        callingDialogVisible, 
        callRejected, 
        hideCallRejectedDialog 
    } =  props;
    return (
        <>
            <LocalVideoView localStream={localStream} />
            {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
            {callRejected.rejected  && <CallRejectedDialog 
            reason={callRejected.reason}
            hideCallRejectedDialog={hideCallRejectedDialog} 
            />}
            {callState === callStates.CALL_REQUESTED && <IncomingCallDialog callerUsername={callerUsername} />}
            {callingDialogVisible && <CallingDialog />}
            <ConversationButtons />

        </>
    );
};

function mapStateToProps ({call}) {
    return{
        ...call
    }
}

function mapDispatchToProps (dispatch) {
    return {
        hideCallRejectedDialog: (callRejectedDetails) => dispatch(setCallRejected(callRejectedDetails))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectCall);