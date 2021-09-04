import React from "react";
import classes from  './profile.module.css';
import MyPosts from "./MyPosts/my-posts";

function Profile() {
    return (
        <div className={classes.profile}>
            <h3>Profile</h3>
            <MyPosts/>
        </div>
    )
}

export default Profile;