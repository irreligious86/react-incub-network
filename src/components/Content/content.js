import React from "react";
import classes from  './content.module.css';
import Profile from "./Profile/profile";
import Messenger from "./Messenger/messenger";
import Music from "./Music/music";
import News from "./News/news";
import Settings from "./Settings/settings";
import {Route} from "react-router-dom";


const Content = props => {
    return (
        <div className={classes.content}>
            <Route path="/profile"  render={ () => <Profile postData={props.appState.profile.posts}/> }/>
            <Route path="/messenger"  render={ () => <Messenger dialogsData={props.appState.messenger.dialogs} messagesData={props.appState.messenger.messages}/> }/>
            <Route path="/news"  component={News}/>
            <Route path="/music"  component={Music}/>
            <Route path="/settings"  component={Settings}/>
        </div>
    )
}

export default Content;