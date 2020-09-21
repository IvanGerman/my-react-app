import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

let  AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field name={'newPostText'} component={Textarea} placeholder={'Post message'} validate={[requiredField, maxLength10]}  />
    </div>
    <div>
      <button>Add Post</button>
    </div>
  </form>
  )
};

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


const MyPosts = (props) => {
    let postsElements = props.posts.map( (p, i) => <Post key = {i} message = {p.message} likes = {p.likes} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => { 
      props.addPost(values.newPostText); 
    };
    

    return (
    <div className = {s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className = {s.posts}>
        { postsElements}
      </div>
    </div> )
};

export default MyPosts;
