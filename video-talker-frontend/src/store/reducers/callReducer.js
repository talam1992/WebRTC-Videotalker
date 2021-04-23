import * as calldActions from '../actions/callActions';

const initState = {
  localStream: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case calldActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream
      };
    default:
      return state;
  }
}
;

export default reducer;