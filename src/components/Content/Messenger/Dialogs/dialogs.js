import React from "react";
import classes from './dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogsData = [
    {name:'Alex', id: 1},
    {name:'Dimych', id: 2},
    {name:'Jurij', id: 3},
    {name:'John', id: 4},
    {name:'jack', id: 5}
]

let Dialog = props => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <h4>Dialogs</h4>
            {
                dialogsData.map(
                    dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                )
            }
        </div>
    )
}

export default Dialogs;