import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";

const MyPosts = props => {

    console.log('My-posts props: ')
    console.log(props)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        alert(`add new post: ${text}`);
        props.addPost('helllllo!');
    }

    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <div className={classes['posts-controls']}>
                <button type='button' onClick={ addPost }>
                    Add new post
                </button>
                <textarea ref={newPostElement} name="" id="" cols="40" rows="1"></textarea>
            </div>
            {
                (props.profileState.posts).map(
                    post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>
                )
            }
        </div>
    )
}

export default MyPosts;