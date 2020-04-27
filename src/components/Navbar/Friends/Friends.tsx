import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props: {
    name: React.ReactNode;
    id: React.ReactNode;
    ava: any
}) => {

    return (
        <div className={s.friendsDiv}>
            <NavLink to={'/friends/' + props.id} className={s.person} activeClassName={s.active}>
                <div className={s.personContainer}>
                    <div><img src={props.ava} alt="avatarka" className={s.ava}/></div>
                    <div className={s.avaName}>{props.name}</div>
                </div>
            </NavLink>
        </div>

    );
};

export default Friends;