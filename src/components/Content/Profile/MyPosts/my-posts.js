import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";

const MyPosts = props => {
    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <button>Add new post</button>
            {
                (props.postData).map(
                    post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>
                )
            }
        </div>
    )
}

export default MyPosts;