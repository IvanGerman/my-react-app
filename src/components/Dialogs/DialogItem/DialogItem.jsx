import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    /*perenosim dlinnuju neudobnuju stroku v peremennuju path*/ 
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.dialog + ' ' + s.active}>
            <img alt = "" src = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042018/untitled-2_302.png?_kEf111.e9ybDq1BltG2dzdDSrrDKYQA&itok=rNNyBPYW" />
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
};



export default DialogItem;