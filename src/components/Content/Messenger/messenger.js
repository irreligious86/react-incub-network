import React from "react";
import classes from './messenger.module.css';
import Messages from "./Messages/messages";
import Dialogs from "./Dialogs/dialogs";


const Messenger = props => {
    return (
        <div className={classes.messenger}>
            <Dialogs dialogsState={props.messengerState.dialogs}/>
            <Messages messagesState={props.messengerState.messages}/>
        </div>
    )
}

export default Messenger;