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

    let newMsgElement = React.createRef();

    const addMessage = () => {
        let text = newMsgElement.current.value
        alert(`add new message: ${text}`);
    }
    return (
        <div className={classes.messages}>
            <h4>Messages</h4>
            <div className={classes['messages-controls']}>
                <button type='button' onClick={addMessage}>Add message</button>
                <textarea
                    placeholder='Enter your message: '
                    ref={newMsgElement}
                    name="" id=""
                    cols="40"
                    rows="1"></textarea>
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