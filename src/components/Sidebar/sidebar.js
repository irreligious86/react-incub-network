import React from "react";
import classes from  './sidebar.module.css';

function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <h3>Sidebar</h3>
            <div className={classes['sidebar-item ']}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${classes['sidebar-item']} ${classes['sidebar-item--active']}`}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes['sidebar-item ']}>
                <a href="/news">News</a>
            </div>
            <div className={classes['sidebar-item ']}>
                <a href="/music">Music</a>
            </div>
            <div className={classes['sidebar-item ']}>
                <a href="/settings">Settings</a>
            </div>
        </div>
    )
}

export default Sidebar;