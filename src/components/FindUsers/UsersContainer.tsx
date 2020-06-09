import React from 'react';
// @ts-ignore
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unFollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    private props: any;

    componentDidMount() {
        this.props.toggleIsFetching(true);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: any; totalCount: any; }; }) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <>
            {this.props.isFetching
                ? < Preloader />
                : < Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                />
            }
        </>
    };
}

let mapStateToProps = (state: {
    usersPage: any;
}) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch: (arg0: { type: string; userID?: any; users?: any; }) => void) => {
//     return {
//         follow: (userId: any) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId: any) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: any) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (count: any) => {
//             dispatch(setUsersTotalCountAC(count))
//         },
//         toggleIsFetching: (isFetching: any) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);