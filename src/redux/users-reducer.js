const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = ' SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photos: {
        //         small: 'https://i.pinimg.com/736x/08/c5/78/08c578ba796c810c38f3a9162db56f98.jpg'
        //     },
        //     followed: false,
        //     name: 'Varvara',
        //     status: 'Junior Front-end',
        //     // location: {city: 'Kyiv', country: 'Ukraine' }
        // },
        // {
        //     id: 2,
        //     photos: {
        //         small: 'https://i.ya-webdesign.com/images/avatar-png-1.png'
        //     },
        //     followed: true, name: 'Aleksandr', status: 'Photographer',
        //     // location: {city: 'Boyarka', country: 'Ukraine' }
        // },
        // {
        //     id: 3,
        //     photos: {
        //         small: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/048_girl_avatar_profile_woman_waiter_butler-512.png'
        //     },
        //     followed: false, name: 'Polina', status: 'Master in kang fu',
        //     // location: {city: 'Boyarka', country: 'Ukraine' }
        // }
    ],
    pageSize: 4,
    totalUsersCount: 0,
    constTotalCount: 54,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        }
        case UN_FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count = state.constTotalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

//AC
export const follow = (userID) => {
    return {type: FOLLOW, userID}
};
export const unFollow = (userID) => {
    return {type: UN_FOLLOW, userID}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, page}
};
export const setTotalUsersCount = (count) => {
    return {type: SET_TOTAL_COUNT, count}
};
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

export default usersReducer;