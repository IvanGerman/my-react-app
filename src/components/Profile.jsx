import React from 'react';
import s from './Profile.module.css';
console.log("s = ", s);
const Profile = () => {
    return <div className = {s.content}>
    <div id = {s.first_image}>
      <img  src = "https://ma3.su/images/easyblog_articles/4543/b2ap3_medium_Sunrise-dawn-mountains-grass-flowers_2560x1600.jpg" />
    </div>
    <div>
      <img src = "https://archilab.online/images/1/123.jpg" />
    </div>
    <div>My Posts</div>
    <div>New Post</div>
    <div className = 'posts'>
      <div className = {s.item}>Post 1</div>
      <div className = {s.item}>Post 2</div>
    </div>
  </div>
};

export default Profile;
