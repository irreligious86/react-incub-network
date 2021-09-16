import React from "react";
import classes from './messages.module.css';

let messagesData = [
    {id: 1, message: "Hello! IT is my message."},
    {id: 2, message: "Hello! IT is my message."},
    {id: 3, message: "Hello! IT is my message."},
    {id: 4, message: "Hello! IT is my message."},
    {id: 5, message: "Hello! IT is my message."},
]

const Message = props => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Messages = props => {
    return (
        <div className={classes.messages}>
            <h4>Messages</h4>
            <Message id={messagesData[0].id} message={messagesData[0].message}/>
            <Message id={messagesData[1].id} message={messagesData[1].message}/>
            <Message id={messagesData[2].id} message={messagesData[2].message}/>
            <Message id={messagesData[3].id} message={messagesData[3].message}/>
        </div>
    )
}

export default Messages;