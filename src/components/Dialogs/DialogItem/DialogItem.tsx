import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props: {
    name: React.ReactNode;
    id: React.ReactNode;
    ava: any}) => {
    // @ts-ignore
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={s.person} activeClassName={s.active}>
                <div><img src={props.ava} alt="avatarka" className={s.ava}/></div>
                <div className={s.avaName}>{props.name}</div>
            </NavLink>
        </div>
    )
}
export default DialogItem;