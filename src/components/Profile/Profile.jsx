import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
console.log("s = ", s);


const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
        <MyPostsContainer store = {props.store}  />
      </div>
    )
};

export default Profile;
