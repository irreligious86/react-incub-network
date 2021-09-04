import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";

function MyPosts() {
    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <button>Add new post</button>
            <Post message="Hi! How are you?"/>
            <Post message="This is my first post"/>
            <Post message="I am fine!"/>
            <Post message="I have one question"/>
            <Post message="Who can help me?"/>
            <Post message="???"/>
            <Post message="WTF!!!"/>
            <Post message="Bye!"/>
        </div>
    )
}

export default MyPosts;