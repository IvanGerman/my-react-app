import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    /*perenosim dlinnuju neudobnuju stroku v peremennuju path*/ 
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.dialog + ' ' + s.active}>
            <img alt = "" src = "https://lh3.googleusercontent.com/proxy/_TGxK-RQh93kA6soJO75wA0CaqKZMRn9wpIgJiYuCjAj8qIGg7Ri4hBlsdxQulbBA6oVjGSJfOWsV1qc-IxpuTiu0-0aKD7U9c16AFYRwur8-Ho" />
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
};



export default DialogItem;