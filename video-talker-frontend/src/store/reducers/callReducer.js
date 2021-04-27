import * as calldActions from '../actions/callActions';

const initState = {
  localStream: null,
  callState: calldActions.callStates.CALL_UNAVAILABLE
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
    default:
      return state;
  }
}
;

export default reducer;