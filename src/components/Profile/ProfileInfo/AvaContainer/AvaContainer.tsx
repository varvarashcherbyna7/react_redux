import React from 'react';
import s from './AvaContainer.module.css';

const AvaContainer = (props: {
    profile: {
        aboutMe: any;
        fullName: any;
        photos: { large: string | undefined; }; };
}) => {

    return (
            <div className={s.containerAva}>
                <div className={s.bgImg}>
                    <img src='https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg' alt="bgImg"/>
                </div>
                <div className={s.avaDiv}>
                    <div><img src={props.profile.photos.large} alt="ava"/></div>
                    <div className={s.nameDiv}>{props.profile.fullName}</div>
                    <div className={s.aboutMeDiv}>{props.profile.aboutMe}</div>
                </div>
            </div>

    );
};

export default AvaContainer;