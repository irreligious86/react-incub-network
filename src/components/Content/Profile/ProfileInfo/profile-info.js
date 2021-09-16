import React from "react";
import classes from './profile-info.module.css';

function ProfileInfo() {
    return (
        <div className={classes['profile-info']}>
profile info
            <div className={classes['avatar-block']}>
                <img src="" alt="avatar"/>
            </div>
            <div className={classes['description-block']}>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;