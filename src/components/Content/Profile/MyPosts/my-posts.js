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
            {
                postData.map(
                    post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>
                )
            }
        </div>
    )
}

export default MyPosts;