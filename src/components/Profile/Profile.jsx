import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
console.log("s = ", s);
const Profile = () => {
    return <div>
    <div id = {s.first_image}>
      <img  alt = "" src = "https://ma3.su/images/easyblog_articles/4543/b2ap3_medium_Sunrise-dawn-mountains-grass-flowers_2560x1600.jpg" />
    </div>
    <div>
      <img alt = "" src = "https://archilab.online/images/1/123.jpg" />
    </div>
    <MyPosts />
    </div>
};

export default Profile;
