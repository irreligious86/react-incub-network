import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";


let postData = [
    {id: 1, message: "Hello! It is my post.", likesCount: 3},
    {id: 2, message: "Hello! It is my post.", likesCount: 3},
    {id: 3, message: "Hello! It is my post.", likesCount: 3},
    {id: 4, message: "Hello! It is my post.", likesCount: 3},
    {id: 5, message: "Hello! It is my post.", likesCount: 3},
]

function MyPosts() {
    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <button>Add new post</button>
            <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount}/>
            <Post id={postData[3].id} message={postData[3].message} likesCount={postData[3].likesCount}/>
            <Post id={postData[4].id} message={postData[4].message} likesCount={postData[4].likesCount}/>
        </div>
    )
}

export default MyPosts;