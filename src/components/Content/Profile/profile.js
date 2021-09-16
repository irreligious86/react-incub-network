import React from "react";
import classes from  './profile.module.css';
import MyPosts from "./MyPosts/my-posts";
import ProfileInfo from "./ProfileInfo/profile-info";


const Profile = props => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;