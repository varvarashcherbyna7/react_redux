import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    // @ts-ignore
    return (
       <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add posts</button>
                </div>
            <div className={s.posts}>
              <Post message='Hello )' likesCount='23'/>
              <Post message = {'Hi )'} likesCount='2'/>
            </div>
        </div>
    );
};

export default MyPosts;