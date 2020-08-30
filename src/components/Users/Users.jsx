import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userphoto.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/100;
        let pages = [];
        for ( let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

    return (
        (
            <div className={styles.super_wrapper}>
                <div className={styles.div_top}>Users</div>
                <div id={styles.div_pagesNumbers}>
                    { pages.map( (p,i) => { 
                        return <span key = {i} className={props.currentPage === p ? styles.selectedPage : undefined} onClick={ (e) => { props.onPageChanged(p); } }>{p}</span>

                    })
                    }                    
                </div>
                <div className={styles.users_wrapper}>
        
                    { props.users.map( u => 
                    <div key = {u.id} className={styles.small_wrapper}>
                        <div className={styles.div_left}>
                            <div className={styles.div_img}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={ u.photos.small != null ? u.photos.small : userPhoto } />
                                </NavLink>
                            </div>
                            <div className={styles.div_button}>
                                { u.followed
                                     ? <button onClick = { () => {
                                          
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: { "API-KEY": "1371f8f6-2f45-496f-8d3b-e435c469f3e2"}}).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                          });
                                      } }>Unfollow</button> 

                                     : <button onClick = { () => {
                                         
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: { "API-KEY": "1371f8f6-2f45-496f-8d3b-e435c469f3e2"}}).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                          });
                                      } }>Follow</button> }
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
    )
}  

export default Users;