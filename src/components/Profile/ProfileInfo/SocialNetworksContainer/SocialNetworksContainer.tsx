import React from 'react';
import s from './SocialNetworksContainer.module.css';
import {NavLink} from "react-router-dom";
import fbIcon from './../img/snetworks/f.png';
import insIcon from './../img/snetworks/ins.png';
import twIcon from './../img/snetworks/tw.png';
import youtubeIcon from './../img/snetworks/you.png'

const SocialNetworksContainer = (props: {
    profile: {
        contacts:{
            youtube: any;
            instagram: any;
            twitter: any;
            facebook: any}; };
}) => {
    return (
            <div className={s.socialNetworksContainer}>
                <NavLink to='{props.profile.contacts.facebook}'>
                    <div className={s.socialNetworksDiv}><img src={fbIcon} alt="fbImg"/></div>
                </NavLink>
                <NavLink to='{props.profile.contacts.instagram}'>
                    <div className={s.socialNetworksDiv}><img src={insIcon} alt="insImg"/></div>
                </NavLink>
                <NavLink to='{props.profile.contacts.twitter}'>
                    <div className={s.socialNetworksDiv}><img src={twIcon} alt="twImg"/></div>
                </NavLink>
                <NavLink to='{props.profile.contacts.youtube}'>
                    <div className={s.socialNetworksDiv}><img src={youtubeIcon} alt="youtubeImg"/></div>
                </NavLink>
            </div>
    );
};
// @ts-ignore
export default SocialNetworksContainer;