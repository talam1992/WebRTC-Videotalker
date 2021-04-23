import store from '../../store/store';
import { setLocalStream } from "../../store/actions/callActions";

const defaultConstrains = {
    video: true,
    audio: true
};

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstrains)
    .then(stream => {
        store.dispatch(setLocalStream(stream));
    })
    .catch(err => {
        console.log('error occured when trying to get access to get local stream');
        console.log(err);
    });
}
;