// import profileReducer from "./profile-reducer";
// import dialogReducer from "./dialog-reducer";
// import sideBarReducer from "./sideBar-reducer";
//
// let store = {
//     _state : {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi', likesCount: 23},
//                 {id: 2, message: 'Hello', likesCount: 0},
//                 {id: 3, message: 'Yo', likesCount: 3}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: 'Varvara', ava: 'https://www.businesstyc.com/wp-content/uploads/2019/03/avataaars.png'},
//                 {id: 2, name: 'Oleksandr', ava:'https://imgur.com/I80W1Q0.png'},
//                 {id: 3, name: 'Polina', ava: 'https://www.nuclearinst.com/write/MediaUploads/avataaars.png'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'Yo'}
//             ],
//             newMessageText: ' '
//         },
//         sideBar : {
//             friends: [
//                 {id: 1, name: 'Maryna', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY6EIXPWwJEQjHcszeCrXCP6Krepz-94sJKXzzWBFVedmbxe3J&usqp=CAU'},
//                 {id: 2, name: 'Artem', ava: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png'},
//                 {id: 3, name: 'Alina', ava: 'https://d2te1y9qx21itc.cloudfront.net/images/home-2018/home-school/parents-avatar.png'}
//             ]
//         }
//     },
//     _callSubscribe () {
//         console.log('Change state')
//     },
//     getState () {
//         return this._state;
//     },
//     subscribe (observer) {
//         this._callSubscribe = observer;
//     },
//
//     dispatch (action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action);
//
//         this._callSubscribe(this._state);
//     }
// };
//
// window.store = store;
//
// export default store;