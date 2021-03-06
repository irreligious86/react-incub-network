import React from "react";
import classes from './messages.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/state";

const Message = props => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Messages = props => {
    const newMessageBody =  props.store._state.messenger.newMessageBody;
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.messages}>
            <h4>Messages</h4>
            <div className={classes['messages-controls']}>
                <button
                    type='button'
                    onClick={onSendMessageClick}
                >
                    Add message
                </button>
                <textarea
                    placeholder='Enter your message:'
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                     > </textarea>
            </div>
            {
                (props.messagesState).map(
                    msg => <Message key={msg.id} id={msg.id} message={msg.message}/>
                )
            }
        </div>
    )
}

export default Messages;