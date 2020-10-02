import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";

let state = {
  posts: [
      {id: 1, message: "Hi,how are you?", likes: 15},
      {id: 2, message: "It's my first post", likes: 20},
      {id: 3, message: "Blabla", likes: 330},
      {id: 4, message: "Quakva", likes: 99}
  ]
};

it('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator('bla-bla2');
  
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(5);

});

it('value of message should be correct', () => {
  //1. test data
  let action = addPostActionCreator('bla-bla2');
  
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts[4].message).toBe('bla-bla2');
  expect(newState.posts[4].id).toBe(5);
});

//delaem TDD test
it('after deleting length of messages should be decremented', () => {
  //1. test data
  let action = deletePostAC(1);
  
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(3);
});
