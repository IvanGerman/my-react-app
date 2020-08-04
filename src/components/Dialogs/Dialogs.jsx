import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( (d, i) => 
        <DialogItem key = {i} name = {d.name} id = {d.id} /> );

    let messagesElements = state.messages.map ( (m, i) => { 
        return (
        <Message key = {i} message = {m.message} /> );
    });

    let newMessageBody = state.newMessageBody;
     

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value = {newMessageBody}
                                   onChange = {onNewMessageChange} 
                                   placeholder = 'Enter your messages'></textarea></div>
                    <div><button onClick = { onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;