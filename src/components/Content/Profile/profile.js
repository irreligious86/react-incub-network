import React from "react";
import classes from  './profile.module.css';
import MyPosts from "./MyPosts/my-posts";
import ProfileInfo from "./ProfileInfo/profile-info";


const Profile = props => {
    console.log('Profile props: ')
    console.log(props)
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts
                profileState={props.profileState}
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;