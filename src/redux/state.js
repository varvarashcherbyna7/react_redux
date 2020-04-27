let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 23},
                {id: 2, message: 'Hi', likesCount: 0}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Varvara', ava: 'https://www.businesstyc.com/wp-content/uploads/2019/03/avataaars.png'},
                {id: 2, name: 'Oleksandr', ava:'https://imgur.com/I80W1Q0.png'},
                {id: 3, name: 'Polina', ava: 'https://www.nuclearinst.com/write/MediaUploads/avataaars.png'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hi hi hi'}
            ],
            newMessageText: ' Message'
        },
        sideBar : {
            friends: [
                {id: 1, name: 'Maryna', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY6EIXPWwJEQjHcszeCrXCP6Krepz-94sJKXzzWBFVedmbxe3J&usqp=CAU'},
                {id: 2, name: 'Artem', ava: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png'},
                {id: 3, name: 'Alina', ava: 'https://d2te1y9qx21itc.cloudfront.net/images/home-2018/home-school/parents-avatar.png'}
            ]
        }
    },
    _callSubscribe () {
        console.log('Change state')
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    },

    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._callSubscribe()
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe()
    },
    addMessage ()  {
        let newMessage = {
            id: 4,
            message: this._state.dialogPage.newMessageText
        };
        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.newMessageText = ' ';
        this._callSubscribe()
    },
    updateNewMessageText (newMessage)  {
        this._state.dialogPage.newMessageText = newMessage;
        this._callSubscribe()
    },

    dispatch (action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callSubscribe()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = newText;
            this._callSubscribe()
        }
    }

}

window.store = store;

export default store;