import React from 'react';
import styles from './Paginator.module.css';


let Paginator = (props) => {
  
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/100;
        let pages = [];
        for ( let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

    return (
           <>
            <div className={styles.div_top}>Users</div>
                <div id={styles.div_pagesNumbers}>
                    { pages.map( (p,i) => { 
                        return <span key = {i} className={props.currentPage === p ? styles.selectedPage : undefined} onClick={ (e) => { props.onPageChanged(p); } }>{p}</span>
                    })
                    }                    
                </div>
            </>
    )
}  

export default Paginator;