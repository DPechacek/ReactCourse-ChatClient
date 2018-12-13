import React from 'react';
import PropTypes from 'prop-types';
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

function ChatWindow(props) {
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>

            <MessageList messages={props.messages} username={props.username} />
            <SendMessage postMessage={props.postMessage} username={props.username} />
        </div>
    );
}

ChatWindow.propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    postMessage: PropTypes.func.isRequired
};

export default ChatWindow;