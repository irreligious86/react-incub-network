import React from "react";
import classes from  './content.module.css';
import Profile from "./Profile/profile";

function Content() {
    return (
        <div className={classes.content}>
            <h1>Content</h1>
            <Profile/>
        </div>
    )
}

export default Content;