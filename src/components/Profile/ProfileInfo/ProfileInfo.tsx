import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import AvaContainer from "./AvaContainer/AvaContainer";
import SocialNetworksContainer from "./SocialNetworksContainer/SocialNetworksContainer";
import JobDescriptionContainer from "./JobDescriptionContainer/JobDescriptionContainer";

const ProfileInfo = (props: {
    profile: {
        contacts: {
            youtube: any;
            instagram: any;
            twitter: any;
            facebook: any
        };
        lookingForAJobDescription: any;
        lookingForAJob: any;
        aboutMe: any;
        fullName: any;
        photos: { large: string | undefined; };
    };
}) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.container}>
            <AvaContainer profile={props.profile}/>
            <SocialNetworksContainer profile={props.profile}/>
            <JobDescriptionContainer profile={props.profile}/>
            <div className={s.postDiv}>

            </div>
        </div>
    );
};

export default ProfileInfo;