import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
         users: [
          //  {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/412px-Arnold_Schwarzenegger_1974.jpg', followed: false, fullName: 'Arnold', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
          //  {id: 2, photoUrl: 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg', followed: true, fullName: 'Silvestr', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
          //  {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu5d12BbxJeBRtoDeifScpR0ywqs3-T5RAWA&usqp=CAU', followed: false, fullName: 'Jean', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} }
           ],
          pageSize: 5,
          totalUsersCount: 0,
          currentPage: 1,
          isFetching: true,
          followingInProgress: []
};

const usersReducer = (state = initialState, action) => {


    //************************************************ 
    // variant 2
    // const helper = (followedValue) => {
    //   return {
    //     ...state,
    //     users: state.users.map( u => {
    //       if (u.id === action.userID) {
    //         return { ...u, followed: followedValue }
    //       }
    //       return u;
    //     })
    // };
    // };
    switch(action.type) {

        case FOLLOW:
          return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
          }
          //********************************************
            // variant 2
            //  return helper(true);
          //********************************************
            // variant 1  
            // return {
            //     ...state,
            //     users: state.users.map( u => {
            //       if (u.id === action.userID) {
            //         return { ...u, followed: true }
            //       }
            //       return u;
            //     })
            // };
        
        case UNFOLLOW:
          return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
          }
          //********************************************
            // variant 2
            //return helper(false);
          //********************************************
            // variant 1
            // return {
            //     ...state,
            //     users: state.users.map( u => {
            //       if (u.id === action.userID) {
            //         return { ...u, followed: false }
            //       }
            //       return u;
            //     })
            // };
        
        case SET_USERS: {
                return { ...state, users: action.users };
        }

        case SET_CURRENT_PAGE: {
                return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
          return { ...state, totalUsersCount: action.count };
        }

        case TOGGLE_IS_FETCHING: {
          return { ...state, isFetching: action.isFetching };
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
          return { ...state,
             followingInProgress: action.isFetching
             ? [...state.followingInProgress, action.id]
             : state.followingInProgress.filter(id => id !== action.id) 
            };
        }

        
        //rasshifrovka zapisi sverhu:
        //1.prihodit spisok polzovatelej,(s servera naprimer)
        //2.beru starij state i delau kopiu: ...state
        //3.beru starih polzovatelej,kotorie bili v starom state(v massive users): [...state.users,      ], sozdau kopiu etogo massiva s pomoshiu "..."
        //4 i dopisivau k nim kopiu massiva polzovatelej, kotorie prishli iz action: ...action.users ]
        //5 vso vmeste eto vigladit tak: [ ...state.users, ...action.users ]  ,to est mi tut //skleivaem 2 massiva i pomeshaem ih pod svojstvom users: (etot users zatiraet/zameshaet starij users v objekte state )
        default: 
            return state;
    };
};

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

//thunk
export const getUsers = (currentPage,pageSize) => {
  return (dispatch) => {
  dispatch(toggleIsFetching(true));

  usersAPI.getUsers(currentPage,pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, id));
  let response = await apiMethod(id);
        if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    };
    dispatch(toggleFollowingProgress(false, id));
};

export const follow = (id) => {
    return (dispatch) => {
      let apiMethod = usersAPI.follow.bind(usersAPI);//bindim follow na usersAPI
      let actionCreator = followSuccess;
      followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
    //  dispatch(toggleFollowingProgress(true, id));
    //  usersAPI.follow(id).then(response => {
    //          if (response.data.resultCode === 0) {
    //        dispatch(followSuccess(id));
    //    }
    //    dispatch(toggleFollowingProgress(false, id));
   
 };
};

export const unfollow = (id) => {
  return (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);//bindim follow na usersAPI
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
    //  dispatch(toggleFollowingProgress(true, id));
    //  usersAPI.unfollow(id).then(response => {
    //    if (response.data.resultCode === 0) {
    //        dispatch(unfollowSuccess(id));
    //    }
    //    dispatch(toggleFollowingProgress(false, id));
   
 };
};

export default usersReducer;