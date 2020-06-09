import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava_2.png";
import {NavLink} from "react-router-dom";

const Users = (props: {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (arg0: number) => void;
    users: any[];
    unFollow: (arg0: any) => void;
    follow: (arg0: any) => void;
}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pageDiv}>
                {
                    pages.map((p) => {

                        return (
                            <div key={p} className={props.currentPage === p ? s.selectedPage : s.page}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>
                                {p}
                            </div>
                        )
                    })
                }
            </div>
            {props.users.map((u) =>
                <div key={u.id} className={s.usersContainer}>
                    <div className={s.avaDiv}>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={s.imgDiv}>
                                <img src={u.photos.small != null
                                    ? u.photos.small
                                    : userPhoto}
                                     alt="photoAva"/>
                            </div>
                        </NavLink>
                        {u.followed
                            ? <div className={s.btn}
                                   onClick={() => {
                                       props.unFollow(u.id)
                                   }}>Unfollow</div>
                            : <div className={s.btn}
                                   onClick={() => {
                                       props.follow(u.id)
                                   }}>Follow</div>}
                    </div>

                    <div className={s.nameDiv}>
                        <div className={s.fullNameStatusDiv}>
                            <div className={s.fullName}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.locationDiv}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div>
            )
            }
        </div>
    )
};

export default Users;