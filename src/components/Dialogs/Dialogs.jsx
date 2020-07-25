import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


// let dialogs = [
//     {id: 1, name: "Dima"},
//     {id: 2, name: "Andrey"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Sasha"},
//     {id: 5, name: "Viktor"},
//     {id: 6, name: "Valera"}
// ];

// let messages = [
//     {id: 1, message: "Hi!"},
//     {id: 2, message: "How are you?"},
//     {id: 3, message: "Yo!"},
//     {id: 4, message: "Yo!"},
//     {id: 5, message: "Yo!"}
// ];

// let dialogsElements = dialogs.map ( (d, i) => 
//     <DialogItem key = {i} name = {d.name} id = {d.id} /> );
// let messagesElements = messages.map ( (m, i) =>
//     <Message key = {i} message = {m.message} /> );

const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogs.map ( (d, i) => 
        <DialogItem key = {i} name = {d.name} id = {d.id} /> );

    let messagesElements = props.state.messages.map ( (m, i) => { 
        return (
        <Message key = {i} message = {m.message} /> );
     }
    ); 

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;