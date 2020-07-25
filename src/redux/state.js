import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi,how are you?", likes: 15},
            {id: 2, message: "It's my first post", likes: 20},
            {id: 3, message: "Blabla", likes: 330},
            {id: 4, message: "Quakva", likes: 99}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: "Yo!"}
        ],
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;
