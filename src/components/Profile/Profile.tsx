import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props: {   state: any;
                            addPost: any;
                            updateNewPostText: any; }) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts  state={props.state}
                      addPost={props.addPost}
                      updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;