import React from 'react';
import s from './Message.module.css';

const Message = (props: {
    message: React.ReactNode;
    id:React.ReactNode; }) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;