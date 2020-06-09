import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props: {
    dialogs: any;
    messages: any;
    newMessageText: any;
    addMessage: any;
    onMessageChange: any;
}) => {

    let dialogsElements = props.dialogs
        .map((d: { name: React.ReactNode; id: React.ReactNode; ava: any }) =>
            // @ts-ignore
        <DialogItem name={d.name} ava={d.ava} id={d.id} key={d.id}/>);
    let messagesElements = props.messages
        .map((m: { message: React.ReactNode; id: React.ReactNode}) =>
            // @ts-ignore
        <Message message={m.message} id={m.id} key={m.id}/>);

    // let newPostElement = React.createRef();
    let newMessage = props.newMessageText;

    let onClickAddMessage = () => {
        props.addMessage();
    };
    let onMessageChange = (e: { target: { value: any; }; }) => {
        // @ts-ignore
        // let text = newPostElement.current.value;
        let text = e.target.value;
        props.onMessageChange(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div className={s.textareaDiv}>
                        <textarea
                            value={newMessage}
                            onChange={onMessageChange}
                            placeholder='Enter your message'
                                  // @ts-ignore
                                  //  ref={newPostElement}
                        />
                    </div>
                    <div>
                        <button onClick={onClickAddMessage}>
                            Add posts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;