import * as calldActions from '../actions/callActions';

const initState = {
  localStream: null,
  callState: calldActions.callStates.CALL_UNAVAILABLE,
  callingDialogVisible: false,
  callerUsername: '',
  callRejected: {
    rejected: false,
    reason: ''
  },
  remoteStream: null,
  localCameraEnabled: true,
  localMicrophoneEnabled: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case calldActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream
      };
    case calldActions.CALL_SET_CALL_STATE:
      return{
        ...state,
        callState: action.callState
      };
    case calldActions.CALL_SET_CALLING_DIALOG_VISIBLE:
      return {
        ...state,
        callingDialogVisible: action.visible
      };
    case calldActions.CALL_SET_CALLER_USERNAME:
      return {
        ...state,
        callerUsername: action.callerUsername
      };
    case calldActions.CALL_SET_CALL_REJECTED:
      return {
        ...state,
        callRejected: action.callRejected
      };
    case calldActions.CALL_SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: action.remoteStream
      };
    case calldActions.CALL_SET_LOCAL_CAMERA_ENABLED:
      return {
        ...state,
        localCameraEnabled: action.localCameraEnabled
      };
    case calldActions.CALL_SET_LOCAL_MICROPHONE_ENABLED:
      return {
        ...state,
        localMicrophoneEnabled: action.localMicrophoneEnabled
      };
    default:
      return state;
  }
}
;

export default reducer;