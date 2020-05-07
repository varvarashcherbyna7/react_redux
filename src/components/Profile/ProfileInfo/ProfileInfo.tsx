import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg' alt="ava"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;