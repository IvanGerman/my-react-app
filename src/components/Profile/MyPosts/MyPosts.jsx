import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

  let posts = [
    {id: 1, message: "Hi,how are you?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20},
    {id: 3, message: "Blabla", likes: 330},
    {id: 4, message: "Quakva", likes: 99}
  ];

let postsElements = posts.map( (p, i) => <Post key = {i} message = {p.message} likes = {p.likes} />)

const MyPosts = () => {
  
    return (
    <div className = {s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className = {s.posts}>
        { postsElements}
      </div>
    </div> )
};

export default MyPosts;
