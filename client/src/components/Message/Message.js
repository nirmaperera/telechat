import React from 'react';
import ReactEmoji from "react-emoji";

import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimName = name.trim().toLowerCase();
    if (user === trimName) {
        isSentByCurrentUser = true
    }
    return (

        isSentByCurrentUser ? (
            <div className="message__Container justify__end">
                <p className="sent__Text pr-10">{trimName}</p>
                <div className="message__Box background__Blue">
                    <p className="message__Text color__white">{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        ) : (
                <div className="messageContainer justify__start">

                    <div className="message__Box">
                        <p className="message__Text">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sent__Text pl-10">{user}</p>

                </div>

            )



    )
}

export default Message;