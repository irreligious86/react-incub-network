import React from "react";
import classes from  './profile.module.css';
import MyPosts from "./MyPosts/my-posts";
import ProfileInfo from "./ProfileInfo/profile-info";

function Profile() {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;