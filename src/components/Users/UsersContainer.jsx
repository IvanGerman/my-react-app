import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
    
  }
  
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;