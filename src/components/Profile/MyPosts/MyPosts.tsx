import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props: {
    posts: any, newPostText: any, addPost: any, updateNewPostText: any }) => {


    let postsElement = props.posts
        .map((p: {
            id: React.ReactNode;
            message: React.ReactNode;
            likesCount: React.ReactNode; }) =>
            // @ts-ignore
            <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea
                            // @ts-ignore
                            ref={newPostElement}
                            onChange={onPostChange}
                            value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};
export default MyPosts;