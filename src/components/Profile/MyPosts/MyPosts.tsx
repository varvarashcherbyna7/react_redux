import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props: {
    state: any,
    addPost: any,
    updateNewPostText: any }) => {
    let postsElement = props.state.profilePage.posts.map( (p: { message: React.ReactNode; likesCount: React.ReactNode; }) => {
        return <Post message={p.message} likesCount={p.likesCount}/>;
    });
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (

       <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div >
                    <div>
                        // @ts-ignore
                        <textarea ref={ newPostElement }
                                  onChange={ onPostChange }
                                  value={props.state.profilePage.newPostText} />
                    </div>
                    <div>
                        <button onClick={ addPost }>Add posts</button>
                    </div>
                </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
};
export default MyPosts;