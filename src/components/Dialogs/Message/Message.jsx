import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    
    
    return (
        <div className = {s.message}>
            
            <span>{props.message}</span>
        </div> 
    )
};



export default Message;