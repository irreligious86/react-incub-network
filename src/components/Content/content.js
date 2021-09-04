import React from "react";
import classes from  './content.module.css';
import Profile from "./Profile/profile";
import Dialogs from "./Dialogs/dialogs";
import {Route} from "react-router-dom";

function Content() {
    return (
        <div className={classes.content}>
            <h1>Content</h1>
            <Route path="/profile"  component={Profile}/>
            <Route path="/dialogs"  component={Dialogs}/>
            {/*<Profile/>*/}
            {/*<Dialogs/>*/}
        </div>
    )
}

export default Content;