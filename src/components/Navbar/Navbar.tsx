import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props:  any) => {

    let friendsElements = props.state.sideBar.friends.map((f: { name: any; id: any; ava: any; }) =>
        <Friends id={f.id} name={f.name} ava={f.ava}/>);
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
                <NavLink to='settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <p className={s.friends}>Friends</p>
            <div className={s.friendsDiv}>
                {friendsElements}
            </div>
        </nav>
    );
};

export default Navbar;