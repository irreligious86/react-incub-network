import React from "react";
import classes from  './content.module.css';
import Profile from "./Profile/profile";
import Dialogs from "./Dialogs/dialogs";

function Content() {
    return (
        <div className={classes.content}>
            <h1>Content</h1>
            <Profile/>
            <Dialogs/>
        </div>
    )
}

export default Content;