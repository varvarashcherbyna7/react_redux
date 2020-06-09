import React from 'react';
import s from './JobDescriptionContainer.module.css';
import smile from './../img/job/smile.png'
import smileAngry from './../img/job/angry_smile.png'

class JobDescriptionContainer extends React.Component<any, any>{
    private props: any;
    constructor(props: any) {
        super(props);
        this.state = {
            lookingForAJob: true
        }
    }

    onChangeSmile = () => {
        this.setState((p: { lookingForAJob: any; }) => {
            return {lookingForAJob: !p.lookingForAJob};
        })
    };
render () {
    return (
        <div className={s.containerJobDescription}>
            <div className={s.jobImgText}> Looking for a job </div>
            <div className={s.jobDiv}>
                <div className={s.imgDiv} onClick={this.onChangeSmile}>
                    <img src={this.props.profile.lookingForAJob
                    ? smile
                    : smileAngry}
                          alt="smile"/>

                </div>
                <div className={s.descriptionDiv}>
                    {this.props.profile.lookingForAJobDescription}
                </div>
            </div>

        </div>
    );
}

};

// @ts-ignore
export default JobDescriptionContainer