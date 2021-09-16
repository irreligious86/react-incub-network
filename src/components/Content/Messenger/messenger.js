import React from "react";
import classes from './messenger.module.css';
import Messages from "./Messages/messages";
import Dialogs from "./Dialogs/dialogs";


const Messenger = props => {
    return (
        <div className={classes.messenger}>
            <Dialogs dialogsData={props.dialogsData}/>
            <Messages messagesData={props.messagesData}/>
        </div>
    )
}

export default Messenger;