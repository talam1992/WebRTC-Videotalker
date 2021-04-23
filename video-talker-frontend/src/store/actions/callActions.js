export const CALL_SET_LOCAL_STREAM = 'CALL_SET_LOCAL_STREAM';

export const setLocalStream = (localStream) => {
    return {
        type: CALL_SET_LOCAL_STREAM,
        localStream
    };
}
;