import React from 'react';
import s from './Navbar.module.css';
// @ts-ignore
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import store from "../../redux/redux-store";

const Navbar = () => {

    let state = store.getState();

    let friendsElements = state.sideBar.friends
        .map((f: { id: any; name: any;  ava: any; }) => <Friends key={f.id} name={f.name} ava={f.ava} id={f.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={classNames(s.usersDiv, s.item)}>
                <NavLink to='/findUsers' activeClassName={s.active}>Find Users</NavLink>
            </div>
            <p className={s.friends}>Friends</p>
            <div className={s.friendsDiv}>
                {friendsElements}
            </div>
        </nav>
    );
};

export default Navbar;