import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
    
        profilePage: {
            posts: [
                {id: 1, message: "Hi,how are you?", likes: 15},
                {id: 2, message: "It's my first post", likes: 20},
                {id: 3, message: "Blabla", likes: 330},
                {id: 4, message: "Quakva", likes: 99}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo!"},
                {id: 4, message: "Yo!"},
                {id: 5, message: "Yo!"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber()  {
    
    },


    getState() {
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },


    
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
};

// export const addPostActionCreator = () => {
//     return {
//       type: ADD_POST
//     };
//   };
// export const updateNewPostTextActionCreator = (text) => {
//     return {
//       type: UPDATE_NEW_POST_TEXT,
//       newText: text
//     };
//   };
// export const sendMessageCreator = () => {
//     return {
//       type: SEND_MESSAGE
//     };
//   };
// export const updateNewMessageBodyCreator = (body) => {
//     return {
//       type: UPDATE_NEW_MESSAGE_BODY,
//       body: body
//     };
//   };


export default store;
