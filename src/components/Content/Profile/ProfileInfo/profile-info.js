import React from "react";
import classes from './profile-info.module.css';

function ProfileInfo() {
    return (
        <div className={classes['profile-info']}>
profile info
            <div>
                image
            </div>
            <div className={classes['description-block']}>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;