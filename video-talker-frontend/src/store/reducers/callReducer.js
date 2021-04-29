import * as calldActions from '../actions/callActions';

const initState = {
  localStream: null,
  callState: calldActions.callStates.CALL_UNAVAILABLE,
  callingDialogVisible: false,
  callerUsername: '',
  callRejected: {
    rejected: false,
    reason: ''
  }
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
      }
    case calldActions.CALL_SET_CALL_REJECTED:
      return {
        ...state,
        callRejected: action.callRejected
      }
    default:
      return state;
  }
}
;

export default reducer;