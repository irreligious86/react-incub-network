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
            {
                messagesData.map(
                    msg => <Message key={msg.id} id={msg.id} message={msg.message}/>
                )
            }
        </div>
    )
}

export default Messages;