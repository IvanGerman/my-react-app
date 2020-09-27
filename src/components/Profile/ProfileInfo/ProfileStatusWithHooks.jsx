import React from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
  
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => { 
        setEditMode(false);

        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value );
    };

    return (
    <div>
      {  !editMode &&
        <div>
          <span onDoubleClick={ activateEditMode } className = {s.spanForStatus}>{props.status || "when status value coming from global state via GET request is empty"}</span>
        </div>
      }
      {editMode && 
        <div>
          <input  autoFocus={true} onBlur={ deactivateEditMode } onChange= {onStatusChange} value={status} />
        </div>
      }
    </div>
    )
};


export default ProfileStatusWithHooks;
