import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props: {   state: any,
                            // newMessageText: any,
                            addMessage: any,
                            updateNewMessageText: any }) => {

    let dialogsElements = props.state.dialogPage.dialogs.map((d: { name: React.ReactNode; id: React.ReactNode; ava: any }) =>
        <DialogItem name={d.name} id={d.id} ava={d.ava}/>);
    let messagesElements = props.state.dialogPage.messages.map((m: { message: React.ReactNode; }) =>
        <Message message={m.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addMessage();
    };
    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        // @ts-ignore
                        <textarea ref={newPostElement}
                                  onChange={onPostChange}
                                  value={props.state.dialogPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={addPost}>
                            Add posts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;