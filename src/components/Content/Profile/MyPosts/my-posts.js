import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";

function MyPosts() {
    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <button>Add new post</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;