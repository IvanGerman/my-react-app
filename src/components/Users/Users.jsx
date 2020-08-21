import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userphoto.jpg';


class Users extends React.Component {

    //constructor(props) {
        //super(props); -eto propishetsa avtomatom
    componentDidMount() {
    
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
        
    }

    onPageChanged = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)/100;
        let pages = [];
        for ( let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        return (
            <div className={styles.super_wrapper}>
                <div className={styles.div_top}>Users</div>
                <div id={styles.div_pagesNumbers}>
                    { pages.map( (p,i) => { 
                        return <span key = {i} className={this.props.currentPage === p ? styles.selectedPage : undefined} onClick={ (e) => { this.onPageChanged(p); } }>{p}</span>

                    })
                    }                    
                </div>
                <div className={styles.users_wrapper}>
        
                    { this.props.users.map( u => 
                    <div key = {u.id} className={styles.small_wrapper}>
                        <div className={styles.div_left}>
                            <div className={styles.div_img}><img src={ u.photos.small != null ? u.photos.small : userPhoto } /></div>
                            <div className={styles.div_button}>
                                { u.followed ? <button onClick = { () => { this.props.unfollow(u.id) } }>Unfollow</button> : <button onClick = { () => { this.props.follow(u.id) } }>Follow</button> }
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
    }
}

export default Users;