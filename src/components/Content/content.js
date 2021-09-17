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
            <Route path="/profile"  render={ () => <Profile postData={props.appState.posts}/> }/>
            <Route path="/messenger"  render={ () => <Messenger dialogsData={props.appState.dialogs} messagesData={props.appState.messages}/> }/>
            <Route path="/news"  component={News}/>
            <Route path="/music"  component={Music}/>
            <Route path="/settings"  component={Settings}/>
        </div>
    )
}

export default Content;