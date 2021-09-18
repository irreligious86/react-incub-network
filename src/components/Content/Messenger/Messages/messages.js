import React from "react";
import classes from './messages.module.css';


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
                (props.messagesState).map(
                    msg => <Message key={msg.id} id={msg.id} message={msg.message}/>
                )
            }
        </div>
    )
}

export default Messages;