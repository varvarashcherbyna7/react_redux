// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
// @ts-ignore
import {connect} from 'react-redux';

// const MyPostsContainer = (props: { state: any, dispatch: any}) => {
//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     };
//     let onPostChange = (text: any ) => {
//         props.dispatch(updateNewPostTextActionCreator(text));
//     };
//
//     return (
//         <MyPosts posts={props.state.profilePage.posts}
//                  newPostText = {props.state.profilePage.newPostText}
//                  updateNewPostText={onPostChange}
//                  addPost={addPost}/>
//     );
// };

let mapStateToProps = (state: { profilePage: any; }) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch: (arg0: { type: string; newText?: any; }) => void) => {
    return {
        updateNewPostText: (text: any) => {
            dispatch(updateNewPostTextActionCreator(text));
        } ,
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;