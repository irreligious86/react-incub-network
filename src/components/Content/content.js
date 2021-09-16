import React from "react";
import classes from  './content.module.css';
import Profile from "./Profile/profile";
import Messenger from "./Messenger/messenger";
import Music from "./Music/music";
import News from "./News/news";
import Settings from "./Settings/settings";
import {Route} from "react-router-dom";


let postData = [
    {id: 1, message: "Hello! It is my post.", likesCount: 3},
    {id: 2, message: "Hello! It is my post.", likesCount: 3},
    {id: 3, message: "Hello! It is my post.", likesCount: 3},
    {id: 4, message: "Hello! It is my post.", likesCount: 3},
    {id: 5, message: "Hello! It is my post.", likesCount: 3},
]

let dialogsData = [
    {name:'Alex', id: 1},
    {name:'Dimych', id: 2},
    {name:'Jurij', id: 3},
    {name:'John', id: 4},
    {name:'jack', id: 5}
]

let messagesData = [
    {id: 1, message: "Hello! IT is my message."},
    {id: 2, message: "Hello! IT is my message."},
    {id: 3, message: "Hello! IT is my message."},
    {id: 4, message: "Hello! IT is my message."},
    {id: 5, message: "Hello! IT is my message."},
]

function Content() {
    return (
        <div className={classes.content}>
            <Route path="/profile"  render={ () => <Profile postData={postData}/> }/>
            <Route path="/messenger"  render={ () => <Messenger dialogsData={dialogsData} messagesData={messagesData}/> }/>
            <Route path="/news"  component={News}/>
            <Route path="/music"  component={Music}/>
            <Route path="/settings"  component={Settings}/>
        </div>
    )
}

export default Content;