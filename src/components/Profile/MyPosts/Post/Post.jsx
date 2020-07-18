import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
      <div className = {s.item}>
          <img alt = "" src = "https://i1.sndcdn.com/avatars-000454055625-zsckew-t500x500.jpg" />
          {props.message}
          <div>
          <span>Like {props.likes}</span>
          </div>
      </div>
    )
};

export default Post;
