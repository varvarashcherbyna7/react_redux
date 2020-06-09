import React from 'react';
import preloaderImg from "../../../assets/images/preloaderImg.svg";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.container}>
            <img src={preloaderImg}
                 alt="preloader"
            />
        </div>
    )
};

export default Preloader;