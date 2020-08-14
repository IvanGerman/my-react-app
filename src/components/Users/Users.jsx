import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userphoto.jpg';

console.log('object styles: ', styles);
let Users = (props) => {
    
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            
            props.setUsers(response.data.items);
        });
        // props.setUser( [
        //     {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/412px-Arnold_Schwarzenegger_1974.jpg', followed: false, fullName: 'Arnold', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        //     {id: 2, photoUrl: 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg', followed: true, fullName: 'Silvestr', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        //     {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu5d12BbxJeBRtoDeifScpR0ywqs3-T5RAWA&usqp=CAU', followed: false, fullName: 'Jean', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} }
        //     ])
    };

    return (
    <div className={styles.super_wrapper}>
        <div className={styles.div_top}>Users</div>
        <div className={styles.users_wrapper}>

            { props.users.map( u => 
            <div key = {u.id} className={styles.small_wrapper}>
                <div className={styles.div_left}>
                    <div className={styles.div_img}><img src={ u.photos.small != null ? u.photos.small : userPhoto } /></div>
                    <div className={styles.div_button}>
                        { u.followed ? <button onClick = { () => { props.unfollow(u.id) } }>Unfollow</button> : <button onClick = { () => { props.follow(u.id) } }>Follow</button> }
                    </div>
                </div>
                <div className={styles.div_right}>
                    <div className={styles.div_name}>{u.name}</div>
                    <div className={styles.div_status}>{u.status}</div>
                    <div className={styles.div_location}>{"u.location.city"},<br/>{"u.location.country"}</div>
                </div>
            </div> )
            }
            
            
        </div>
    </div>
    )
};

export default Users;