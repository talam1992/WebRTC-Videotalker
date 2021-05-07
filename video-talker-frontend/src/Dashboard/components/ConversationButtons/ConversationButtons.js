import React from 'react';
import { MdCallEnd, MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdVideoLabel, MdVideoCall, MdCamera } from 'react-icons/md';
import ConversationButton from './ConversationButton';


const styles = {
    buttonContainer: {
        display: 'flex',
        position: 'absolute',
        bottom: '22%',
        left: '35%'
    },
    icons: {
        width: '25px',
        height: '25px',
        fill: '#e6e5e8'
    }
};

const ConversationButtons = (props) => {
    return (
        <div style={styles.buttonContainer}>
            <ConversationButton>
                <MdMic style={styles.icons} />
            </ConversationButton>
            <ConversationButton>
                <MdCallEnd style={styles.icons} />
            </ConversationButton>
            <ConversationButton>
                <MdVideocam style={styles.icons} />
            </ConversationButton>
            <ConversationButton>
                <MdVideoLabel style={styles.icons} />
            </ConversationButton>
        </div>
    );
}

export default ConversationButtons;