import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    
    
    return (
        <div className = {s[props.kls]}>
            <img alt = "" src = {props.kls2} />
            <span>{props.message}</span>
        </div> 
    )
};



export default Message;