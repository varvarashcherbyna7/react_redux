import React from 'react';
// @ts-ignore
// import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
// @ts-ignore
import {connect} from "react-redux";
import { setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: { data: { items: any; totalCount: any; }; }) => {
                this.props.setUserProfile(response.data);
            })
    }

    private props: any;
    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: { profilePage: { profile: any; }; }) => {
    return {
        profile: state.profilePage.profile
    }
};

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})( withRouter(ProfileContainer));